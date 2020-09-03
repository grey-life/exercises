// EX-20
const movie = {
    name: 'Good Will Hunting',
    yearOfRelease: 1997,
    cast: [
        'Matt Damon',
        'Robin Williams',
        'Ben Affleck',
    ],
    addToCast: function(actor) {
        this.cast.push(actor);
    },
    boxOfficeCollection: 0,
    addToCollection: function(amt) {
        this.boxOfficeCollection += amt;
    },
}
movie.addToCast('Minnie Driver');
movie.addToCollection(2250000000);
// console.log(movie);

// EX-21
const foo = function() {
    console.log(this)
};
const bar = foo.bind({ x: 1 });
bar();

// EX-22
const sum = function(x, y) {
    return x+y
};
const new_sum1 = sum.bind(null, 10);
const new_sum2 = sum.bind(null, 10, 20);
console.log(new_sum2());
