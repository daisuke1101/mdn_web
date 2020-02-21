var arr = [1, 2, 3];

console.log(arr.includes(2));  // true
console.log(arr.includes(4));  // false
console.log(arr.includes(3, 3));  // false(検索開始位置が４番目)
console.log(arr.includes(3, -1));  // true(検索開始位置が最後)
console.log(arr.includes(NaN));  // false

arr.push(NaN);
console.log(arr.includes(NaN));  //true