conn = new Mongo();
db = conn.getDB("dummyDB");

const printEntries = () => {
    const cursor = db.dummyCollection.find();
    if(!cursor.hasNext()) {
        printjson({
            error: 'dummyCollection removed',
        });
    }

    while(cursor.hasNext()) {
        printjson(cursor.next());
    }
}

db.dummyCollection.insertOne({
    dummyData: 'dummyValue',
});

printEntries();
db.dummyCollection.drop();

printEntries();
db.dropDatabase();

// js for show dbs
let value = db.adminCommand('listDatabases');
printjson(value);
