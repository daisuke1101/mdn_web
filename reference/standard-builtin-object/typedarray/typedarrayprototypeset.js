var buffer = new ArrayBuffer(8);
var uint8 = new Uint8Array(buffer);

uint8.set([1, 2, 3], 3);
console.log(uint8);  // Uint8Array(8) [0, 0, 0, 1, 2, 3, 0, 0]