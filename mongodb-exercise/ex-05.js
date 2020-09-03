conn = new Mongo();
db = conn.getDB("orderedDB");
db.values.drop();

db.values.insertMany([{ _id: 1, x: 1, }, { _id: 2, x: 2, },]);

// Throws duplicate key error
// db.values.insertMany([{ _id: 3, x: 3 }, { _id: 2, x: 2 }, { _id: 4, x: 4 }, { _id: 5, x: 5 }]);

// Throws error but inserts data
db.values.insertMany([{ _id: 3, x: 3 }, { _id: 2, x: 2 }, { _id: 4, x: 4 }, { _id: 5, x: 5 }], { ordered: false });




