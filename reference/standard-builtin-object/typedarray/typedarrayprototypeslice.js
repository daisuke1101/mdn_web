var uint8 = new Uint8Array([1, 2, 3]);
console.log(uint8.slice(1));  // Uint8Array(2) [2, 3]
console.log(uint8.slice(2));  // Uint8Array [3]
console.log(uint8.slice(-2));  // Uint8Array(2) [2, 3]
console.log(uint8.slice(0, 1));  // Uint8Array [1]