conn = new Mongo();
db = conn.getDB("exercise");

db.shows.find(
    {
        webChannel: {
            $exists: true,
            $not: {
                $type: 'null',
            }
        }
    },
    { _id: 0, webChannel: true }
);

db.shows.find(
    {
        webChannel: {
            $exists: true,
            $ne: null,
        }
    },
    { _id: 0, webChannel: true }
);

db.shows.find(
    {
        'webChannel.country': {
            $exists: true,
            $ne: null,
        }
    },
    {
        _id: 0,
        webChannel: true,
    }
).pretty();

db.shows.find(
    {
        webChannel: {
            $type: "null",
        }
    }
).pretty().count();

db.shows.find(
    {
        'webChannel.country': {
            $type: "null",
        }
    },
    {
        _id: 0,
        name: true,
        webChannel: true,
    }
).pretty().count();

