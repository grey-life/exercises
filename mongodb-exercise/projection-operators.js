conn = new Mongo();
db = conn.getDB("exercise");

db.students.find(
    {
        "scores.subject": 'History',
    },
    {
        _id: 0,
        name: 1,
        'scores.$': 1,
    }
);

db.students.find(
    {
        "scores.subject": 'History',
    },
    {
        _id: 0,
        name: 1,
        scores:{
            $slice: 2,
        },
    }
);