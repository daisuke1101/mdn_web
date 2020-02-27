const array1 = [1, 2, 3, 4];
const reducer = (accumulator, currentValue) => accumulator + currentValue;

// 1 + 2 + 3 + 4
console.log(array1.reduce(reducer));  // 10

// 5 + 1 + 2 + 3 + 4
console.log(array1.reduce(reducer, 5));  // 15(最初の引数を5に設定)