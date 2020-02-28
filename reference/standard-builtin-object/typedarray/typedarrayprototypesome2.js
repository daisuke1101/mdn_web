const isBiggerThan10 = ((element) => (element > 10));

console.log(new Uint8Array([2, 5, 8, 1, 4]).some(isBiggerThan10));  // false
console.log(new Uint8Array([12, 5, 8, 1, 4]).some(isBiggerThan10));  // true