var myMap = new Map();
myMap.set('0', 'foo')
    .set(1, 'bar')
    .set({}, 'baz');

var mapIter = myMap[Symbol.iterator]();

console.log(mapIter.next().value);  // (2) ["0", "foo"]
console.log(mapIter.next().value);  // (2) [1, "bar"]
console.log(mapIter.next().value);  // (2) [{…}, "baz"]