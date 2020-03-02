var ws = new WeakSet();

ws.add(window);

console.log(ws.has(window));  // true