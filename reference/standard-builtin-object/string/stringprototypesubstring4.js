var text1 = 'Mozilla';

// substr()は、現在では非推奨です
console.log(text1.substring(2, 5));  // zil(substring()の場合、開始位置→終了位置の次位置)
console.log(text1.substr(2, 3));  // zil(substr()の場合、開始位置→取得する文字数)

console.log(text1.substring(5, 2));  // zil(substring()の場合、開始位置＞終了位置の次位置の場合、両者が入れ替わる)
console.log(text1.slice(5, 2));  // ""(slice()の場合、開始位置＞終了位置の次位置の場合、空の文字列を返す)

// 引数が負もしくはNaNの場合、substring()メソッドは0として扱う
console.log(text1.substring(-5, 2));  // Mo
console.log(text1.substring(-5, -2));  //

// slice()の場合、引数がNaNの場合は0として扱い、負の場合は文字列の末尾からの文字数でIndexを探す
console.log(text1.slice(-5, 2));  // ""
console.log(text1.slice(-5, -2));  // zil