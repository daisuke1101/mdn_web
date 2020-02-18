var obj = {};
var a = Symbol('a');
var b = Symbol.for('b');

obj[a] = 'localSymbol';
obj[b] = 'globalSymbol';

var objectSymbols = Object.getOwnPropertySymbols(obj);

console.log(objectSymbols.length);  // 
console.log(objectSymbols);  // 
console.log(objectSymbols[0]);  // 


