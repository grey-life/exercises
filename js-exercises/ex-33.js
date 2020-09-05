const vehicle = function() {
    this.name = '';
    this.averageSpeed = '0';
    this.type = '';
}

const vehicle2 = new vehicle();
vehicle2.name = 'car';
vehicle2.averageSpeed = 300;
vehicle2.type = 'land'

const vehicle3 = new vehicle();
vehicle3.name = 'aeroplane';
vehicle3.averageSpeed = '575';
vehicle3.type = 'air';

console.log(vehicle2);
console.log(vehicle3);