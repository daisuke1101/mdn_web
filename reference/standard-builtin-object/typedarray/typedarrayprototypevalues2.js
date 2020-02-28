var arr = new Uint8Array([10, 20, 30, 40, 50]);
var eArray = arr.values();

console.log(eArray.next().value);  // 10
console.log(eArray.next().value);  // 20
console.log(eArray.next().value);  // 30
console.log(eArray.next().value);  // 40
console.log(eArray.next().value);  // 50