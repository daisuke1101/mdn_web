// 要素を操作するためのマップ関数として
// Arrow関数を使用
console.log(Array.from([1, 2, 3], x => x + x));  // [2, 4, 6]
console.log(Array.from([1, 2, 3], x => x ** x));  // [1, 4, 27]

// 連番の生成
// 配列はそれぞれの場所が'undefined'で初期化されるため、
// 以下の'v'の値は'undefined'になる
console.log(Array.from({length: 5}, (v, i) => i));  // (5) [0, 1, 2, 3, 4]