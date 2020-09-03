let res: unknown;

// EX-1
const sumArray = (arr: number[]):number => arr.reduce((sum: number, value: number): number => sum + value, 0);
res = sumArray([1, 2, 3]);
console.log(res);

// EX-2
const squareEach = (arr: number[]): number[] => arr.map((value: number): number => value*value);
res = squareEach([1, 2, 3, 4]);
console.log(res);

// EX-3
const contains = (arr: any[], val: any):boolean => {
    arr.forEach((ele:any) => {
        if(ele === val) {
            return true;
        }
    });
    return false;
}
res = contains([1, true, 'hello'], 'hello');
console.log(res);

// EX-4
const map = (arr: number[], transform: (num : number) => number): number[] => {
    const output: number [] = [];
    arr.forEach((ele: number) => {
        output.push(transform(ele));
    });
    return output;
}
res = map([1, 2, 3], (num: number): number => num*num*num);
console.log(res);

// EX-5
const filter = (arr: number[], condition: (num: number) => boolean) : number[] => {
    const output: number[] = [];
    arr.forEach((ele: number) => {
        if(condition(ele)){
            output.push(ele);
        }
    });
    return output;
}
res = filter([1, 2, 3, 4], (num: number) : boolean => num % 2 === 0);
console.log(res);

// EX-6
const exponentFactory = ( exponent: number ) => {
    if ([2, 3].includes(exponent)){
        return ((num: number): number => Math.pow(num, exponent));
    }
    return (num: number): number => num;
}
const powerFive = exponentFactory(5);
console.log(powerFive(4));

// EX-7a
const push = (arr: number[], value: (number | number[])): number[] => {
    if(typeof value === 'number') {
        arr.push(value);
        return arr;
    }
    return arr.concat(value);
    
}
res = push([1, 2, 2],[1, 2, 2]);
console.log(res);
res = push([1,2], 3);
console.log(res);

// EX-7b
const log = (message: string, format?: ('standard' | 'verbose')) => {
    if(format === 'verbose') {
        console.log(message, new Date());
    }else {
        console.log(message);
    }
};
log('Hello, World!');
log('Hello, there', "verbose");
log('Hello, there', "standard");

// EX-7c
const hireCar = (endDate: Date, carType: ('hatchback' | 'sedan' | 'suv') = 'sedan', startDate?: Date) => {
    return {
        startDate: startDate || new Date(),
        carType: carType || 'sedan',
        endDate,
    }
}
console.log(hireCar(new Date(), 'hatchback'));
console.log(hireCar(new Date(), undefined, new Date()));

// EX-8 
interface IClock {
    type: ('digital' | 'analog'),
    time: {
        hours: number,
        minutes: number,
        seconds: number,
    },
    setTime: (hours: number, minutes: number, seconds: number) => string,
    getTime: () => string,
}

const ajanta:IClock = {
    type: 'analog',
    time: {
        hours: 0,
        minutes: 0,
        seconds: 0,
    },
    setTime(hours: number, minutes: number, seconds: number) {
        this.time.hours = hours;
        this.time.minutes = minutes;
        this.time.seconds = seconds;
        return `${hours}:${minutes}:${seconds}`;
    },
    getTime() {
        return `${this.type} ${this.time.hours}:${this.time.minutes}:${this.time.seconds}`;
    }
}
console.log(ajanta.setTime(10,23,49));
console.log(ajanta.getTime());

// EX-9
class Project {
    constructor(
        public id: number,
        public name: string,
        private client: string) {
    }
}
const dbsPayroll = new Project( 1001, 'DBS payroll', 'DBS' );
const intranetDeployment = new Project( 2001, 'Intranet v2 deployment', 'Internal' );


// EX-10
class Employee {
    constructor(
        public id: number, 
        public name: string, 
        public role: string, 
        public department: string, 
        private projects: Project[] = []) {
    }
}
const john = new Employee( 1, 'John', 'Web Developer', 'IT', [ dbsPayroll ] );
const jane = new Employee( 2, 'Jane', 'Project Manager', 'IT', [ dbsPayroll, intranetDeployment ] );
const mark = new Employee( 3, 'Mark', 'System Administrator', 'Operations', [ intranetDeployment ] );

// export {};
