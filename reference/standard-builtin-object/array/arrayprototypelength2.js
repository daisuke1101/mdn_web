const arr = [1, 2];
console.log(arr);  // (2) [1, 2]

arr.length = 5;  // 現在2のところに3をセット
console.log(arr);  // (5) [1, 2, empty × 3]

arr.forEach(element => console.log(element));
// 1
// 2