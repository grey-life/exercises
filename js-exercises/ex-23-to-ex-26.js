
// EX-23
const numbers = [ 5, 11, 13, 7, 2, 31, 3, 19, 23, 17, 29 ];
numbers.sort((a, b) => a - b);
numbers.sort((a, b) => b - a);
numbers.push(37);
numbers.pop();
numbers.pop();
console.log(numbers.indexOf(23));
console.log(numbers.indexOf(41));

// EX-24
const days = [ 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday' ];
const noOfLetters = []
days.forEach(day => {
    console.log(day);
    noOfLetters.push(day.length);
});
console.log(noOfLetters);
const newDays = days.filter((day) => day.charCodeAt(0) >= 83 && day.charCodeAt(0) <= 90);
console.log(newDays);
const sixLetterDays = days.filter(day => day.length === 6);
console.log(sixLetterDays);

// EX-25
const phones = [
    { name : 'Samsung Galaxy S10+ Plus', price: 620, type: 'refurbished', manufacturer: 'Samsung' },
    { name : 'Apple iPhone 7 Plus', price: 450, type: 'refurbished', manufacturer: 'Apple' },
    { name : 'One Plus 6', price: 430, type: 'new', manufacturer: 'OnePlus' },
    { name : 'Apple iPhone Xs', price: 910, type: 'new', manufacturer: 'Apple' },
    { name : 'One Plus 7', price: 430, type: 'refurbished', manufacturer: 'OnePlus' },
    { name : 'Apple iPhone 8 Plus', price: 610, type: 'new', manufacturer: 'Apple' },
];

const phoneNames = phones.map(phone => phone.name);
console.log(phoneNames);
const newPhones = phones.filter(phone => phone.type === 'new');
console.log(newPhones);
const cheapPhones = phones.filter(phone => phone.price < 440);
console.log(cheapPhones);

// EX-26
const quote = 'With great power comes great responsibility';
console.log(quote.replace('responsibility', 'electricity bill'));
console.log(quote.search('great'));
console.log(quote.slice(0,10));