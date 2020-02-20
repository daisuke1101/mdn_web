// trueとなる場合
console.log(Array.isArray([]));  // true
console.log(Array.isArray([1]));  // true
console.log(Array.isArray(new Array()));  // true
console.log(Array.isArray(new Array('1', '2', '3', '4')));  // true
console.log(Array.isArray(new Array(3)));  // true
console.log(Array.isArray(Array.prototype));  // true(Array.prototypeは配列扱い)

// falseとなる場合
console.log(Array.isArray());  // false
console.log(Array.isArray({}));  // false(オブジェクト)
console.log(Array.isArray(null));  // false(null)
console.log(Array.isArray(undefined));  // false(undefined)
console.log(Array.isArray(17));  // false(Number)
console.log(Array.isArray('Array'));  // false(String)
console.log(Array.isArray(true));  // false(bool)
console.log(Array.isArray(false));  // false(bool)
console.log(Array.isArray({__proto__: Array.prototype}));  // false
