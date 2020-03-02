var myMap = new Map();

myMap.set('0', 'foo');
myMap.set(1, 'bar');
myMap.set({}, 'baz');

var mapIter = myMap.keys();

console.log(mapIter.next().value);  // 0
console.log(mapIter.next().value);  // 1
console.log(mapIter.next().value);  // {}