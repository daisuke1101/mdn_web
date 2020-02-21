// 補正されたIndexが0未満(２番目の引数に配列長を足した値が0未満の場合)
var arr = ['a', 'b', 'c'];

console.log(arr.includes('a', -100));  // true(補正後-97)
console.log(arr.includes('b', -100));  // true(補正後-97)
console.log(arr.includes('c', -100));  // true(補正後-97)
console.log(arr.includes('a', -2));  // false(補正後1)

// 補正後のIndexが負の場合、配列のすべてを検索します。