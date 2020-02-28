console.log(new Uint8Array([1, 2, 3]).fill(4));  // Uint8Array(3) [4, 4, 4]
console.log(new Uint8Array([1, 2, 3]).fill(4, 1));  // Uint8Array(3) [1, 4, 4]
console.log(new Uint8Array([1, 2, 3]).fill(4, 1, 2));  // Uint8Array(3) [1, 4, 3]
console.log(new Uint8Array([1, 2, 3]).fill(4, 1, 1));  // Uint8Array(3) [1, 2, 3]
console.log(new Uint8Array([1, 2, 3]).fill(4, -3, -2));  // Uint8Array(3) [4, 2, 3]