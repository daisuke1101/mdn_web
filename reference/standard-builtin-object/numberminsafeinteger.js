const x = Number.MIN_SAFE_INTEGER - 1;
const y = Number.MIN_SAFE_INTEGER - 2;

console.log(Number.MIN_SAFE_INTEGER);  // -9007199254740991

console.log(x);  // -9007199254740992

console.log(x === y);  // true