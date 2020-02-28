var uint8 = new Uint8Array([2, 5, 9]);
console.log(uint8.indexOf(2));  // 0
console.log(uint8.indexOf(7));  // -1
console.log(uint8.indexOf(9, 2));  // 2
console.log(uint8.indexOf(2, -1));  // -1
console.log(uint8.indexOf(2, -3));  // 0