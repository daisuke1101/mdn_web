var s = new Set([1, 2, 3]);
console.log(Uint8Array.from(s));  // Uint8Array(3) [1, 2, 3]

console.log(Int16Array.from('123'));  // Int16Array(3) [1, 2, 3]

console.log(Float32Array.from([1, 2, 3], x => x * 2));  // Float32Array(3) [2, 4, 6]

console.log(Uint8Array.from({length: 5}, (v, k) => k));  // Uint8Array(5) [0, 1, 2, 3, 4]