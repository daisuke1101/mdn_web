var arr = new Uint8Array([10, 20, 30, 40, 50]);
var eArr = arr.keys();

console.log(eArr.next().value);  // 0
console.log(eArr.next().value);  // 1
console.log(eArr.next().value);  // 2
console.log(eArr.next().value);  // 3
console.log(eArr.next().value);  // 4