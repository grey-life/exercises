console.log('EX-08\n');
const arr = [1, 2, 3, 4];
const sqr_arr = arr.map(ele => ele*ele);
console.log(sqr_arr);

console.log('EX-10\n');
const greetings = () => {
    const hour = new Date().getHours();
    if (5 <= hour && hour < 12) {
        return 'Good Morning!'
    }
    if (12 <= hour && hour < 16){
        return 'Good Afternoon!'
    }
    if (16 <= hour && hour < 20){
        return 'Good Evening!'
    }    
    return 'Good Night!';
}
console.log(greetings());

console.log('EX-12\n');
const sumSquares = (arr) => arr.reduce((sum, ele) => sum + ele*ele);
console.log(sumSquares([1, 2, 3, 4]));

console.log('EX-13\n');
const contains = (arr, num) => {
    arr.forEach((ele) => {
        if (ele === num) {
            return true;
        }
    })
    return false;
};
console.log(contains([1, 2, 3], 4));

