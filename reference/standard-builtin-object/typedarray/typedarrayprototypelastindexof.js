var uint8 = new Uint8Array([2, 5, 9, 2]);
console.log(uint8.lastIndexOf(2));  // 3
console.log(uint8.lastIndexOf(7));  // -1
console.log(uint8.lastIndexOf(2, 3));  // 3
console.log(uint8.lastIndexOf(2, 2));  // 0
console.log(uint8.lastIndexOf(2, -2));  // 0
console.log(uint8.lastIndexOf(2, -1));  // 3