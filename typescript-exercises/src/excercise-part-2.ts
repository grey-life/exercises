interface IItem<T> {
    id: number,
    name: T,
    getName: () => string;
}

interface FullName {
    manufacturor: string,
    productName: string
}

class ItemShortName implements IItem<string> {
    constructor(
        public id: number,
        public name: string,
    ) {}
    getName() {
        return this.name;
    }
}

class ItemFullName implements IItem<FullName> {
    constructor(
        public id: number,
        public name: FullName,
    ) {}
    getName() {
        return this.name.manufacturor + this.name.productName;
    }
}

function printItem1<T>(arr : IItem<T>[]) {
    arr.forEach(item => {
        console.log(item.getName());
    })
}

function printItem2<T extends IItem<any>>(arr : T[]) {
    arr.forEach(item => {
        console.log(item.getName());
    })
}

const itemArray1 = [
    new ItemShortName(1, 'Apple'),
    new ItemShortName(2, 'OnePlus8'),
]

const itemArray = [
    new ItemFullName(1,  {
        manufacturor: 'Apple',
        productName: 'IphoneSE'
    }),
    new ItemShortName(2, 'OnePlus8'),
]

printItem1(itemArray1);
printItem2(itemArray);
// export{};