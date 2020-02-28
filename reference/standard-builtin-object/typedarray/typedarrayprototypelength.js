var buffer = new ArrayBuffer(8);

var uint8a = new Uint8Array(buffer);
console.log(uint8a.length);  // 8

var uint8b = new Uint8Array(buffer, 1, 5);
console.log(uint8b.length);  // 5

var uint8c = new Uint8Array(buffer, 2);
console.log(uint8c.length);  // 6