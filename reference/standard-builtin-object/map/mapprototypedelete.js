const map1 = new Map();
map1.set('bar', 'foo');

console.log(map1.delete('bar'));  // true

console.log(map1.has('bar'));  // false