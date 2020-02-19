var str = '#foo#';
var regex = /foo/y;

regex.lastIndex = 1;
console.log(regex.test(str));  // true

regex.lastIndex = 5;
console.log(regex.test(str));  // false

console.log(regex.lastIndex);  // 0(一度検索に失敗するとlastIndexはリセットされる)