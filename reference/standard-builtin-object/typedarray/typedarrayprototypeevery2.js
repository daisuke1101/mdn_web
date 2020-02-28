console.log(new Uint8Array([12, 5, 8, 130, 44]).every(element => element >= 10));   // false
console.log(new Uint8Array([12, 54, 18, 130, 44]).every(element => element >= 10));  // true