// Symbol.toPrimitive プロパティを持たない
var obj1 = {};
console.log(+obj1);  // NaN
console.log(`${obj1}`);  // [object Object]
console.log(obj1 + '');  // [object Object]

// Symbol.toPrimitive プロパティを持つ
var obj2 = {
    [Symbol.toPrimitive](hint) {
        if (hint == 'number') {
            return 10;
        }
        if (hint == 'string') {
            return 'string';
        }
        return true;
    }
};
console.log(+obj2);  // 10(hintは'number')
console.log(`${obj2}`);  // string(hintは'string')
console.log(obj2 + '');  // true(hintは'default')