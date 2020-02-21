// fromIndexが配列長と同一か、配列長より大きい場合
var arr = ['a', 'b', 'c'];

console.log(arr.includes('c', 3));  // false
console.log(arr.includes('c', 100));  // false
// 配列を検索せず、常にfalseとなる