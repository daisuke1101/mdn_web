const ws = new WeakSet();
const foo = {};
const bar = {};

ws.add(foo).add(bar);

console.log(ws.has(foo));  // true
console.log(ws.has(bar));  // true

console.log(ws.delete(foo));  // true
console.log(ws.has(foo));  // false
console.log(ws.has(bar));  // true