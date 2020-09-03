// EX-01
const sum = (...args) => args.reduce((sum,val) => sum += val);
console.log(sum(1, 2, 3, 4));

// EX-44
const iPhone11 = {
    name: 'iPhone 11',
    manufacturer: 'Apple',
    price: 699,
    specs: {
        color: 'White',
        memory: {
            value: 128,
            unit: 'MB'
        },
        cameras: {
            front: '12 MP Wide',
            rear: '12 MP Ultra Wide'
        },
        availableColors: [ 'Black', 'Green', 'Yellow', 'Purple', 'Red', 'White' ]
    },
    calculateDiscoutedPrice: function( percentage ) {
        return this.price * ( 100 - percentage ) / 100;
    }
}
const { 
    name, 
    manufacturer: brand, 
    specs: { 
        memory: {
            value : ram,
        },
        cameras: {
            rear: rearCamera,
        },
        availableColors: [
            , secondColor
        ]
    },
} = iPhone11;
console.log(name, brand, ram, rearCamera, secondColor);

// EX-45
const printPhoneDetails = function()  {
    const { calculateDiscoutedPrice } = this;
    console.log(`Apple iPhone is available at 10% discounted rate of $${calculateDiscoutedPrice.call(this, 10)}`);
};
printPhoneDetails.call(iPhone11);

// EX-46
const max = (...args) => args.reduce((max, ele) => max = max < ele ? ele : max);

// EX-47
const numbers = [ 25, 65, 35, 75, 45 ]
console.log(max(...numbers));

// EX-48
const shallowCopy = { ...iPhone11 };
const deepCopy = {
    ...iPhone11,
    specs: {
        ...iPhone11.specs,
        memory: {
            ...iPhone11.specs.memory,
        },
        cameras: {
            ...iPhone11.specs.cameras,
        },
        availableColors: [...iPhone11.specs.availableColors],
    }
}
console.log(shallowCopy, deepCopy);
iPhone11.specs.color = 'Red';
iPhone11.specs.availableColors.push('JetBlack');
console.log(shallowCopy, deepCopy);

// Using an arrow function
/**
 * We can use arrow function while defining inner functions, so that inner functions
 * can also have access to the same context as outer function
*/

// When not to use an arrow function
/**
 * When defining function inside objects, this will get global context, rather than the object.
*/