var buffer = new ArrayBuffer(8);
var uint8 = new Uint8Array(buffer);
uint8.set([1, 2, 3]);
console.log(uint8);  // Uint8Array(8) [1, 2, 3, 0, 0, 0, 0, 0]
uint8.copyWithin(3, 0, 3);
console.log(uint8);  // [1, 2, 3, 1, 2, 3, 0, 0]