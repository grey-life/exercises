conn = new Mongo();
db = conn.getDB("movieDB");
db.albums.drop();

db.albums.insertMany([
    {
        name: 'Interstellar',
        released: 2014,
        songs: [
            {
                name: 'Dreaming of the crash',
                artist: 'Hans Zimmer',
                length: '3:55',
            },
            {
                name: 'Dust',
                artist: 'Hans Zimmer',
                length: '5:41',
            }
        ]
    },
    {
        name: 'Inception',
        released: 2010,
        songs: [
            {
                name: 'Dream is collapsing',
                artist: 'Hans Zimmer',
                length: '2:28',
            },
            {
                name: 'We Built our own world',
                artist: 'Hans Zimmer',
                length: '1:55',
            }
        ]
    },
]);

const printEntries = () => {
    const cursor = db.albums.find();
    while(cursor.hasNext()) {
        printjson(cursor.next());
    }
}

printEntries();

db.albums.updateOne( 
    { 
        name: 'Inception',
        'songs.name' : 'We Built our own world',
    },
    {
        $set: {
            'songs.$.length': '1:56',
        }   
    }
);

printEntries();
db.albums.replaceOne(
    {
        name: 'Inception',
    },
    {
        name: 'Good Will Hunting',
        released: 2020,
        songs: [
            {
                name: 'Angeles',
                artist: 'Elliot Smith'
            }
        ],
    }
);
const oldmovies = db.albums.find(
    {
        released: {
            $lt: 2019,
        }
    }
);
while(oldmovies.hasNext()) {
    printjson(oldmovies.next());
}