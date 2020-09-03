conn = new Mongo();
db = conn.getDB("exercise");

db.shows.updateMany(
    {
        'network.country.code': 'US',
    },
    {
        $set: {
            language: 'English (US)',
            locale: 'en-US',
        }
    }
);

db.shows.findOne(
    {
        weight:  { $lt: 40 },
        'rating.average': { $gt: 7 }
    }
);

db.shows.updateOne(
    {
        weight:  { $gt: 80 },
        'rating.average': { $lt: 6 }
    },
    {
        $inc: {
            weight: -10,
        },
        $set: {
            criticsChoice: false,
        }
    }
);

db.shows.updateOne(
    {
        weight:  { $lt: 40 },
        'rating.average': { $gt: 7 }
    },
    {
        $inc: {
            weight: -10,
        },
        $set: {
            criticsChoice: true,
        }
    }
);

db.shows.updateMany(
    {
        weight: { $lt: 60, $gt: 40 },
        'rating.average': { $gt: 7}
    },
    {
        $max: {
            weight: 50,
        }
    }
);

db.shows.updateMany(
    {
        weight: { $lt: 60 },
        'rating.average': { $gt: 7 },
    },
    {
        $mul: {
            weight: 1.3333,
        }
    }
);

db.shows.updateMany(
    { },
    {
        $rename: {
            criticsChoice: 'cc',
        }
    }
);

db.shows.updateMany(
    { },
    {
        $unset: {
            cc: '',
        }
    }
);



db.shows.updateOne({
    name: 'Food Wars',
    language: 'English',
}, {
    $set: {
        'rating.average': 8,
        genres: ['Drama', 'Action'],
    }
}, {
    upsert: true,
});
 
db.shows.updateMany(
    {
        'schedule.days': 'Monday',
    },
    {
        $set: {
            'schedule.days.$': 'monday',
        }
    }
);

db.shows.updateMany({
    genres: 'Horror',
}, {
    $push: {
        genres: {
            $each: ['Supernatural', 'Spook'],
            $sort: 1,
        }
    }
});

db.shows.updateMany(
    { 
        genres: 'Supernatural',
    },
    {
        $pull: {
            genres: 'Supernatural',
        }
    }
);

db.shows.updateMany(
    { 
        genres: 'Horror',
    },
    {
        $pop: {
            genres: 1,
        }
    }
);

db.shows.updateMany({
    genres: 'Horror',
}, {
    $addToSet: {
        genres: {
            $each: ['Supernatural', 'Spook'],
        }
    }
});

db.shows.aggregate(
    [
        {
            $match: {
                genres: 'Drama'
            }
        }
    ]
);

db.shows.aggregate(
    [
        {
            $match: {
                'network.name': 'HBO',
            }
        }
    ]
)

db.shows.aggregate(
    [
        {
            $match: {
                $group: {
                    _id: 'network.name',
                    numShow: {
                        $sum: 1
                    }
                }
            }
        }
    ]
);

db.shows.aggregate(
    [
        {
            $group: {
                    _id: '$network.name',
                    numShow: {
                        $sum: 1
                    }
                }
            }
    ]
);

db.shows.aggregate(
    [
        {
            $group: {
                _id: {
                    network: '$network.name',
                    country: '$network.country.name',
                },
                numShow: {
                    $sum: 1
                },
                averageRunTime: {
                    $avg: '$runtime',
                }
            }
        },
        {
            $sort: {
                "_id.network": 1,
            }
        }
    ]
);

db.shows.aggregate(
    [
        {
            $group: {
                _id: {
                    network: '$network.name',
                    country: '$network.country.name',
                },
                numShow: {
                    $sum: 1
                },
                averageRunTime: {
                    $avg: '$runtime',
                },
                shows: {
                    $push: '$name'
                }
            }
        }
    ]
);

db.shows.aggregate(
    [
        {
            $match: {
                language: 'English',
            }
        },
        {
            $group: {
                _id: {
                    type: '$type',
                },
                numShows: {
                    $sum: 1
                }
            }, 
        }
    ]
);

db.shows.aggregate(
    [
        {
            $group: {
                _id: {
                    network: '$network.name',
                    country: '$network.country.name',
                },
                numShow: {
                    $sum: 1
                },
                averageRunTime: {
                    $avg: '$runtime',
                },
                shows: {
                    $push: '$name'
                }
            }
        },
        {
            $match: {
                numShow: {
                    $gte: 5,
                }
            }
        }
    ]
);


db.shows.aggregate(
    [
        {
            $group: {
                _id: {
                    network: '$network.name',
                    country: '$network.country.name',
                },
                numShow: {
                    $sum: 1
                },
                averageRunTime: {
                    $avg: '$runtime',
                },
                shows: {
                    $push: '$name'
                }
            }
        },
        {
            $match: {
                averageRunTime: {
                    $lte: 50,
                }
            }
        }
    ]
).pretty();

db.shows.aggregate(
    [
        {
            $project: {
                name: '$name',
                networkName: {
                    $concat: [
                        '$network.name',
                        '(',
                        '$network.country.code',
                        ')',
                    ]
                },
                schedule: '$schedule',
                runtime: '$runtime',
            }
        },
        {
            $out: "results"
        }
    ]
).pretty();

