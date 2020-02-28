var myMap = new Map();
myMap.set('bar', 'baz');
myMap.set(1, 'foo');

console.log(myMap.size);  // 2
console.log(myMap.has('bar'));  // true

myMap.clear();

console.log(myMap.size);  // 0
console.log(myMap.has('bar'));  // false