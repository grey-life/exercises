"use strict";
var ItemShortName = /** @class */ (function () {
    function ItemShortName(id, name) {
        this.id = id;
        this.name = name;
    }
    ItemShortName.prototype.getName = function () {
        return this.name;
    };
    return ItemShortName;
}());
var ItemFullName = /** @class */ (function () {
    function ItemFullName(id, name) {
        this.id = id;
        this.name = name;
    }
    ItemFullName.prototype.getName = function () {
        return this.name.manufacturor + this.name.productName;
    };
    return ItemFullName;
}());
function printItem1(arr) {
    arr.forEach(function (item) {
        console.log(item.getName());
    });
}
function printItem2(arr) {
    arr.forEach(function (item) {
        console.log(item.getName());
    });
}
var itemArray1 = [
    new ItemShortName(1, 'Apple'),
    new ItemShortName(2, 'OnePlus8'),
];
var itemArray = [
    new ItemFullName(1, {
        manufacturor: 'Apple',
        productName: 'IphoneSE'
    }),
    new ItemShortName(2, 'OnePlus8'),
];
printItem1(itemArray1);
printItem2(itemArray);
// export{};
