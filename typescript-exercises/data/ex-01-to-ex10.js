"use strict";
var res;
// EX-1
var sumArray = function (arr) { return arr.reduce(function (sum, value) { return sum + value; }, 0); };
res = sumArray([1, 2, 3]);
console.log(res);
// EX-2
var squareEach = function (arr) { return arr.map(function (value) { return value * value; }); };
res = squareEach([1, 2, 3, 4]);
console.log(res);
// EX-3
var contains = function (arr, val) {
    arr.forEach(function (ele) {
        if (ele === val) {
            return true;
        }
    });
    return false;
};
res = contains([1, true, 'hello'], 'hello');
console.log(res);
// EX-4
var map = function (arr, transform) {
    var output = [];
    arr.forEach(function (ele) {
        output.push(transform(ele));
    });
    return output;
};
res = map([1, 2, 3], function (num) { return num * num * num; });
console.log(res);
// EX-5
var filter = function (arr, condition) {
    var output = [];
    arr.forEach(function (ele) {
        if (condition(ele)) {
            output.push(ele);
        }
    });
    return output;
};
res = filter([1, 2, 3, 4], function (num) { return num % 2 === 0; });
console.log(res);
// EX-6
var exponentFactory = function (exponent) {
    if ([2, 3].includes(exponent)) {
        return (function (num) { return Math.pow(num, exponent); });
    }
    return function (num) { return num; };
};
var powerFive = exponentFactory(5);
console.log(powerFive(4));
// EX-7a
var push = function (arr, value) {
    if (typeof value === 'number') {
        arr.push(value);
        return arr;
    }
    return arr.concat(value);
};
res = push([1, 2, 2], [1, 2, 2]);
console.log(res);
res = push([1, 2], 3);
console.log(res);
// EX-7b
var log = function (message, format) {
    if (format === 'verbose') {
        console.log(message, new Date());
    }
    else {
        console.log(message);
    }
};
log('Hello, World!');
log('Hello, there', "verbose");
log('Hello, there', "standard");
// EX-7c
var hireCar = function (endDate, carType, startDate) {
    if (carType === void 0) { carType = 'sedan'; }
    return {
        startDate: startDate || new Date(),
        carType: carType || 'sedan',
        endDate: endDate,
    };
};
console.log(hireCar(new Date(), 'hatchback'));
console.log(hireCar(new Date(), undefined, new Date()));
var ajanta = {
    type: 'analog',
    time: {
        hours: 0,
        minutes: 0,
        seconds: 0,
    },
    setTime: function (hours, minutes, seconds) {
        this.time.hours = hours;
        this.time.minutes = minutes;
        this.time.seconds = seconds;
        return hours + ":" + minutes + ":" + seconds;
    },
    getTime: function () {
        return this.type + " " + this.time.hours + ":" + this.time.minutes + ":" + this.time.seconds;
    }
};
console.log(ajanta.setTime(10, 23, 49));
console.log(ajanta.getTime());
// EX-9
var Project = /** @class */ (function () {
    function Project(id, name, client) {
        this.id = id;
        this.name = name;
        this.client = client;
    }
    return Project;
}());
var dbsPayroll = new Project(1001, 'DBS payroll', 'DBS');
var intranetDeployment = new Project(2001, 'Intranet v2 deployment', 'Internal');
// EX-10
var Employee = /** @class */ (function () {
    function Employee(id, name, role, department, projects) {
        if (projects === void 0) { projects = []; }
        this.id = id;
        this.name = name;
        this.role = role;
        this.department = department;
        this.projects = projects;
    }
    return Employee;
}());
var john = new Employee(1, 'John', 'Web Developer', 'IT', [dbsPayroll]);
var jane = new Employee(2, 'Jane', 'Project Manager', 'IT', [dbsPayroll, intranetDeployment]);
var mark = new Employee(3, 'Mark', 'System Administrator', 'Operations', [intranetDeployment]);
// export {};
