var wm1 = new WeakMap(), wm2 = new WeakMap(), wm3 = new WeakMap;
var o1 = {}, o2 = function() {}, o3 = window;

wm1.set(o1, 37);
wm1.set(o2, 'azerty');
wm2.set(o1, o2);
wm2.set(o3, undefined);
wm2.set(wm1, wm2);

console.log(wm1.get(o2));  // azerty
console.log(wm2.get(o2));  // undefined(wm2にはo2に関連付けられた値が未定義)
console.log(wm2.get(o3));  // undefined(wm2.o3に関連付けられた値がundefined)

console.log(wm1.has(o2));  // true
console.log(wm2.has(o2));  // false(wm2にはo2に関連付けられた値が未定義)
console.log(wm2.has(o3));  // true(wm2.o3に関連付けられた値がundefined)

console.log(wm3.set(o1, 37));  // WeakMap {{…} => 37}
console.log(wm3.get(o1));  // 37

console.log(wm1.has(o1));  // true
console.log(wm1.delete(o1));  // true
console.log(wm1.has(o1));  // false