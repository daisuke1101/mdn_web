console.log([1, 2, 3].fill(4));  // (3) [4, 4, 4]
console.log([1, 2, 3].fill(4, 1));  // (3) [1, 4, 4]
console.log([1, 2, 3].fill(4, 1, 2));  // (3) [1, 4, 3]
console.log([1, 2, 3].fill(4, 1, 1));  // (3) [1, 2, 3]
console.log([1, 2, 3].fill(4, 3, 3));  // (3) [1, 2, 3]
console.log([1, 2, 3].fill(4, -3, -2));  // (3) [4, 2, 3]
console.log([1, 2, 3].fill(4, NaN, NaN));  // (3) [1, 2, 3]
console.log([1, 2, 3].fill(4, 3, 5));  // (3) [1, 2, 3]
console.log(Array(3).fill(4));  // (3) [4, 4, 4]
console.log([].fill.call({ length: 3 }, 4));  // {0: 4, 1: 4, 2: 4, length: 3}

// 参照渡し
var arr = Array(3).fill({});  // 
arr[0].hi = 'hi';
console.log(arr);  // (3) [{…}, {…}, {…}]
// 0: {hi: "hi"}
//1: {hi: "hi"}
//2: {hi: "hi"}
//length: 3