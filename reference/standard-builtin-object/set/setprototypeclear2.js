var mySet = new Set();
mySet.add(1).add('foo');

console.log(mySet.size);  // 2
console.log(mySet.has('foo'));  // true

mySet.clear();
console.log(mySet.size);  // 0
console.log(mySet.has('foo'));  // false