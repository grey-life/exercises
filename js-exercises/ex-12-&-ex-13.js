const sumSquares = (arr) => arr.reduce((sum, ele) => sum + ele*ele);
console.log(sumSquares([1, 2, 3, 4]));

const contains = (arr, num) => arr.includes(num);
console.log(contains([1, 2, 3], 4));
