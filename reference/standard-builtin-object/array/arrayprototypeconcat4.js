// 配列に値を連結
const letters = ['a', 'b', 'c'];

const alphaNumeric = letters.concat(1, [2, 3]);
console.log(alphaNumeric);  // (6) ["a", "b", "c", 1, 2, 3]