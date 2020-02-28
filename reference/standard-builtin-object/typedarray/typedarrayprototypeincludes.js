var uint8 = new Uint8Array([1, 2, 3]);
console.log(uint8.includes(2));  // true
console.log(uint8.includes(4));  // false
console.log(uint8.includes(3, 3));  // false

// NaNについて(Floatに限りtrue)
console.log(new Uint8Array([NaN]).includes(NaN));  // false(コンストラクタに渡したNaNは0に変換される)
console.log(new Float32Array([NaN]).includes(NaN));  // true
console.log(new Float64Array([NaN]).includes(NaN));  // true