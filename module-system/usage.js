const chalk = require('chalk');

const area = require('./area.js');

const square = chalk.red;
const circle = chalk.magenta;
const rectangle = chalk.greenBright;

console.log(square(`Square: ${area.square(5)}`));
console.log(rectangle(`Rectangle: ${area.rectangle(5, 10)}`));
console.log(circle(`Circle: ${area.circle(7)}`));
