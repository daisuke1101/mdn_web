var mySet = new Set();
mySet.add('0');
mySet.add(1);
mySet.add({});

var setIter = mySet[Symbol.iterator]();

console.log(setIter.next().value);  // 0
console.log(setIter.next().value);  // 1
console.log(setIter.next().value);  // {}