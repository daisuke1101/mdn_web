var buffer = new ArrayBuffer(8);
var uint8 = new Uint8Array(buffer);
uint8.set([1, 2, 3]);

console.log(uint8);  // Uint8Array(8) [1, 2, 3, 0, 0, 0, 0, 0]

var sub = uint8.subarray(0, 4);
console.log(sub);  // Uint8Array(4) [1, 2, 3, 0]