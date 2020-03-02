var mySet = new Set();
mySet.add('foo');

console.log(mySet.has('foo'));  // true
console.log(mySet.has('bar'));  // false

var set1 = new Set();
var obj1 = {'key1': 1};
set1.add(obj1);

console.log(set1.has(obj1));  // true
console.log(set1.has({'key1': 1}));  // false
console.log(set1.add({'key1': 1}));
// Set(2) {{…}, {…}}
// [[Entries]]
// 0:
// value: {key1: 1}
// 1:
// value: {key1: 1}
// size: (...)
// __proto__: Set