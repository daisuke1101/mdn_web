// ネストした配列を連結
const num1 = [[1]];
const num2 = [2,[3]];

const numbers = num1.concat(num2);

console.log(numbers);  // (3) [Array(1), 2, Array(1)]
// 0: (1) [1]
// 1: 2
// 2: [3]
// length: 3
// __proto__: Array(0)

num1[0].push(4);
console.log(numbers);  // (3) [Array(2), 2, Array(1)]
// 0: (2) [1, 4]
// 1: 2
// 2: [3]
// length: 3
// __proto__: Array(0)
//
// (元からの配列の参照を保持)