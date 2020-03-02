var ws = new WeakSet();
var obj = {};
ws.add(window);

console.log(ws.has(window));  // true
console.log(ws.has(obj));  // false