const double = x => x + x;
const triple = x => 3 * x;
const quadruple = x => 4 * x;

const pipe = (...functions) => input => functions.reduce((acc, fn) => fn(acc), input);

const multiply6 = pipe(double, triple);
const multiply9 = pipe(triple, triple);
const multiply16 = pipe(quadruple, quadruple);
const multiply24 = pipe(double, triple, quadruple);

console.log(multiply6(6));  // 36
console.log(multiply9(9));  // 81
console.log(multiply16(16));  // 256
console.log(multiply24(100));  // 2400