// ３つ以上連結させることも可能です。
const num1 = [1, 2, 3];
const num2 = [4, 5, 6];
const num3 = [7, 8, 9];

const numbers = num1.concat(num2, num3);  // 連結したい配列を順に[,]で区切る
console.log(numbers);  // (9) [1, 2, 3, 4, 5, 6, 7, 8, 9]