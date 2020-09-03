// Exercise 05
const arr = [1, 2, 3, 4];
const length = arr.length
console.log(length);
arr[0]++;
arr[length-1] = arr[length-2] + arr[length-1];
arr.push(25);

const emptArray = [];
arr.forEach(element => {
    emptArray.push(element);
});

console.log(emptArray);