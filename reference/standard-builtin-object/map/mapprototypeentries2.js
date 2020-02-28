var myMap = new Map();
myMap.set('0', 'foo');
myMap.set(1, 'bar');
myMap.set({}, 'baz');

var mapIter = myMap.entries();

console.log(mapIter.next().value);  // (2) ["0", "foo"]
console.log(mapIter.next().value);  // (2) [1, "bar"]
console.log(mapIter.next().value);  // (2) [{…}, "baz"]