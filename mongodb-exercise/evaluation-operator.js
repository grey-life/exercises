conn = new Mongo();
db = conn.getDB("exercise");

db.shows.find(
    {
        name: {
            $regex: /Last/i
        },
    },
    {
        _id: 0,
        name: true,   
    }
).pretty();

db.shows.find({
    $expr : {
        $gt: [
            '$weight',
            {
                $multiply: ["$rating.average", 10],
            }
        ]
    }
}, {
    _id: false,
    name: true,
    weight: true,
    "rating.average": true,
}).pretty();

db.shows.find({
    $expr : {
        $gt: [
            '$weight',
            {
                $multiply: ["$rating.average", 10],
            }
        ]
    }
}, {
    _id: false,
    name: true,
    weight: true,
    "rating.average": true,
}).pretty();

db.shows.find({
    genres: {
        $all: ['Drama', 'Horror'],
    }
}, {
    _id: false,
    name: true,
    genres: true,
}).pretty().count();

db.shows.find(
    {
        'schedule.days': {
            $all: ['Monday', 'Tuesday']
        }
    },
    {
        _id: false,
        name: true,
        'schedule.days': true,
    }
).pretty();

db.students.insertMany([
    {
        name: 'Ram',
        scores: [
            { subject: 'History', score: 100 },
            { subject: 'Geography', score: 100 }
        ]
    },
    {
        name: 'Shyam',
        scores: [
            { subject: 'History', score: 92 },
            { subject: 'Science', score: 100 }
        ]
    },
    {
        name: 'Sita',
        scores: [
            { subject: 'Commerce', score: 99 },
            { subject: 'Maths', score: 100 },
            { subject: 'English', score: 87}
        ]
    }
]);

db.students.find({
    "scores.subject": "History",
    "scores.score": {$gt : 90},
}).pretty();

db.students.find({
    scores: {
        $elemMatch: {
            subject: 'History',
            score: { $gt: 90 },
        }
    }
});

db.students.find({
    scores: {
        $size: 2,
    }    
}).pretty();