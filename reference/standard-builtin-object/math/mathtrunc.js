console.log(Math.trunc(13.37));  // 13(正の場合、Math.floorと同等)
console.log(Math.trunc(42.84));  // 42
console.log(Math.trunc(0.123));  // 0
console.log(Math.trunc(-0.123));  // -0(負の場合、Math.ceilと同等)
console.log(Math.trunc('-1.123'));  // -1(暗黙に数値型に変換される)
console.log(Math.trunc(NaN));  // NaN
console.log(Math.trunc('foo'));  // NaN
console.log(Math.trunc());  // NaN