conn = new Mongo();
db = conn.getDB("exercise");

let cursor = db.shows.find({
    runtime: { $lt: 60 }
});

db.show.find({
    'rating.average': {
        $gte: 8,
    }
}, {
    rating: 1
});

db.show.find({
    'rating.average': {
        $gte: 8,
        $lte: 9,
    }
}, {
    rating: 1
});

db.shows.find({ genres: 'Drama' }, { _id: 0, genres: 1 }).pretty();

db.shows.find({ genres: ['Horror'] }, { _id: 0, genres: 1 }).pretty();

db.shows.find({ genres: { $ne: 'Drama' } }, { _id: 0, genres: 1 }).pretty();

db.shows.find({ genres: { $in: ['Drama', 'Horror'] } }, { _id: 0, genres: 1 });

db.shows.find({ type: { $in: ['Animation', 'Reality'] } }, { _id: 0, type: 1 }).pretty();

db.shows.find({ type: { $nin: ['Animation', 'Reality'] } }, { _id: 0, name: true, type: 1 }).pretty();

db.shows.find({ 'network.name': { $nin: ['HBO', 'FOX'] } }, { _id: 0, name: true, type: 1 }).pretty();

db.shows.find({
    $or: [
        {genres: 'Drama'},
        {genres: 'Horror'},
    ]
}).pretty();

db.shows.find({
    genres:{
        $not: {
            $in: ['Drama', 'Horror'],
        }
    },
}).pretty().count();

db.shows.find({
    $and: [
        {genres: 'Drama'},
        {genres: {$ne : 'Horror' }},
    ]
}).pretty();
// 136

db.shows.find({
    $or: [
        {genres: {$ne : 'Drama' }},
        {genres: {$ne : 'Horror'}},
    ]
}).pretty();
// 223


