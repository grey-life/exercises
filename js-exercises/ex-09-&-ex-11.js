// EX-09
function square(num) {
    return num*num;
}
console.log(square(5));

// EX-11
const sumArray = (arr) => arr.reduce((sum, val) => sum += val);
console.log(sumArray([1,4,6,7,8]));