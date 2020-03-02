var myMap = new Map();
myMap.set('bar', 'foo')
    .set(1, 'foobar')
    .set(2, 'baz');

const iterator1 = myMap.entries();

console.log(iterator1.next().value);  // (2) ["bar", "foo"]
console.log(iterator1.next().value);  // (2) [1, "foobar"]
console.log(iterator1.next().value);  // (2) [2, "baz"]