import random

import numpy as np
import pytest

from superduper import Document
from superduper.backends.mongodb.query import MongoQuery
from superduper.base.constant import KEY_BLOBS
from superduper.components.listener import Listener
from superduper.components.model import ObjectModel


def test_listener_serializes_properly():
    q = MongoQuery(table='test').find({}, {})
    listener = Listener(
        model=ObjectModel("test", object=lambda x: x),
        select=q,
        key="test",
    )
    r = listener.encode()

    # check that the result is JSON-able
    import json

    r.pop(KEY_BLOBS)
    print(json.dumps(r, indent=2))


def test_listener_chaining(db):
    db.cfg.auto_schema = True
    table = db['test']

    def insert_random(start=0):
        data = []
        for i in range(5):
            y = int(random.random() > 0.5)
            data.append(
                Document(
                    {
                        "x": i + start,
                        "y": y,
                    }
                )
            )

        db.execute(table.insert(data))

    # Insert data
    insert_random()

    m1 = ObjectModel("m1", object=lambda x: x + 1)
    m2 = ObjectModel("m2", object=lambda x: x + 2)

    listener1 = Listener(
        model=m1,
        select=table.select(),
        key="x",
        identifier="listener1",
        uuid="listener1",
    )
    db.add(listener1)

    listener2 = Listener(
        model=m2,
        select=listener1.outputs_select,
        key=listener1.outputs,
        identifier='listener2',
        uuid='listener2',
    )

    db.add(listener2)

    def check_listener_output(listener, output_n):
        docs = list(db.execute(listener.outputs_select))
        assert len(docs) == output_n
        assert all([listener.outputs in r for r in docs])

    check_listener_output(listener1, 5)
    check_listener_output(listener2, 5)

    insert_random(start=5)
    check_listener_output(listener1, 10)
    check_listener_output(listener2, 10)


@pytest.mark.parametrize(
    "data",
    [
        1,
        "1",
        {"x": 1},
        [1],
        {
            "x": np.array([1]),
        },
        np.array([[1, 2, 3], [4, 5, 6]]),
    ],
)
@pytest.mark.parametrize("flatten", [False, True])
def test_create_output_dest(db, data, flatten):
    db.cfg.auto_schema = True
    table = db["test"]

    m1 = ObjectModel(
        "m1",
        object=lambda x: data if not flatten else [data] * 10,
        flatten=flatten,
    )
    q = table.insert([{"x": 1}])

    db.execute(q)

    listener1 = Listener(
        model=m1,
        select=table.select(),
        key="x",
        identifier="listener1",
    )

    db.add(listener1)

    doc = list(db.execute(listener1.outputs_select))[0]
    result = Document(doc.unpack())[listener1.outputs]
    assert isinstance(result, type(data))
    if isinstance(data, np.ndarray):
        assert np.allclose(result, data)
    else:
        assert result == data


@pytest.mark.parametrize(
    "data",
    [
        1,
        "1",
        {"x": 1},
        [1],
        {
            "x": np.array([1]),
        },
        np.array([[1, 2, 3], [4, 5, 6]]),
    ],
)
def test_listener_cleanup(db, data):
    db.cfg.auto_schema = True
    table = db["test"]

    m1 = ObjectModel(
        "m1",
        object=lambda x: data,
    )
    q = table.insert([{"x": 1}])

    db.execute(q)

    listener1 = Listener(
        model=m1,
        select=table.select(),
        key="x",
        identifier="listener1",
    )

    db.add(listener1)
    doc = list(db.execute(listener1.outputs_select))[0]
    result = Document(doc.unpack())[listener1.outputs]
    assert isinstance(result, type(data))
    if isinstance(data, np.ndarray):
        assert np.allclose(result, data)
    else:
        assert result == data

    db.remove('listener', listener1.identifier, force=True)
    assert not db.databackend.check_output_dest(listener1.predict_id)
