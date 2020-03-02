var ws = new WeakSet();
var obj = {};

ws.add(window);

console.log(ws.delete(obj));  // fales
console.log(ws.delete(window));  // true

console.log(ws.has(window));  // false