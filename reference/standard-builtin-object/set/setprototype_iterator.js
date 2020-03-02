const set1 = new Set();

set1.add(42).add('forty two');

const iterator1 = set1[Symbol.iterator]();

console.log(iterator1.next().value);  // 42

console.log(iterator1.next().value);  // forty two