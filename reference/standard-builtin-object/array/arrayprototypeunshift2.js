var arr = [1, 2];

console.log(arr.unshift(0));  // 3
console.log(arr);  // (3) [0, 1, 2]
console.log(arr.unshift(-2, -1))  // 5
console.log(arr);  // (5) [-2, -1, 0, 1, 2]
console.log(arr.unshift([-3]));  // 6(配列を先頭に追加)
console.log(arr);  // (6) [Array(1), -2, -1, 0, 1, 2]