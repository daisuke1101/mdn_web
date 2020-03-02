var mySet = new Set();
mySet.add('foobar').add(1).add('baz');

var setIter = mySet.entries();

console.log(setIter.next().value);  // (2) ["foobar", "foobar"]
console.log(setIter.next().value);  // (2) [1, 1]
console.log(setIter.next().value);  // (2) ["baz", "baz"]