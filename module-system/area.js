const rectangle = (l, b) => l*b;
const square = (s) => rectangle(s, s);
const PI = 3.14;
const circle = (r) => PI * r * r;

module.exports = {
    rectangle,
    square,
    circle,
}
