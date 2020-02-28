var arr = new Uint8Array([10, 20, 30, 40, 50]);
var eArr = arr.entries();
console.log(eArr.next().value); // (2) [0, 10]
console.log(eArr.next().value); // (2) [1, 20]
console.log(eArr.next().value); // (2) [2, 30]
console.log(eArr.next().value); // (2) [3, 40]
console.log(eArr.next().value); // (2) [4, 50]