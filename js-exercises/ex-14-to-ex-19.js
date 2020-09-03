// EX-14
const passFunc = (cb) => {
    cb();
}
passFunc(() => {
    console.log('Callback function');
});

// EX-15
const sum = (x, y, cb) => {
    let sum = cb(x);
    sum += cb(y);
    return sum;
}
console.log(sum(4, 3, (x) => x*x));

// EX-16
const sumArray = (arr, cb) => arr.reduce((sum, ele) => sum += cb(ele));
console.log(sumArray([1, 2, 3], (x) => x*x));

// EX-17
const exponentFunc = (power) => {
    if ([2,3].includes(power)) {
        return (x) => {
            return Math.pow(x, power);
        }
    }
    return (x) => {
        return x;
    }
}
const sqr = exponentFunc(4);
console.log(sqr(5));

// EX-18
const addTo = (num) => (x) => x+num;
const addTo10 = addTo(10);
console.log(addTo10(5));

// EX-19
const john = {
    name: 'John',
    age: 32,
}

const jane = {
    name: 'Jane',
    age: 34,
}
console.log(john.age);
john.age++;
console.log(john.age);
john.address = {
    firstLine : 'MG Road',
    city: 'Mumbai'
}
console.log(john.address.city);
john.spouseName = jane;
jane.spouseName = john;
jane.emailId = [
    'mail@work.com',
    'mail@personal.com'
]
console.log(jane.emailId[1]);
jane.emailId[1] = 'mail@home.com';
console.log(jane.emailId[1]);
jane.emailId.push('mail@club.com');
const celebrateBirthday = function() {
    this.age++;
}
john.celebrateBirthday = celebrateBirthday;
jane.celebrateBirthday = celebrateBirthday;
console.log(john.age, jane.age);
john.celebrateBirthday();
jane.celebrateBirthday();
console.log(john.age, jane.age);