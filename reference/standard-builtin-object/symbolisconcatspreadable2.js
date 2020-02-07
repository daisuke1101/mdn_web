var alpha = ['a', 'b', 'c'], numeric = [1, 2, 3];

numeric[Symbol.isConcatSpreadable] = false;  // concatメソッドを禁止(配列オブジェクトnumericが配列オブジェクトalphaと結合できなくする→要素の展開不可)
var alphaNumeric = alpha.concat(numeric);

console.log(alphaNumeric);  // ['a', 'b', 'c', Array(3)]を表示