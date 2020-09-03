const chalk = require('chalk');
const area = require('./area.js');
const square = chalk.red;
const circle = chalk.magenta;
const rectangle = chalk.greenBright;

const areas = [
    ['shape', 'area'],
    ['square', square(area.square(5))],
    ['circle', circle(area.rectangle(5, 10))],
    ['rectangle', rectangle(area.circle(7))]
]

console.log(square(`Square: ${area.square(5)}`));
console.log(rectangle(`Rectangle: ${area.rectangle(5, 10)}`));
console.log(circle(`Circle: ${area.circle(7)}`));
