const map1 = new Map();
map1.set('bar', 'foo');

console.log(map1.has('bar'));  // true
console.log(map1.has('baz'));  // false(key見つからず)