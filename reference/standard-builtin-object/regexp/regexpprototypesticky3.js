// パターンとともに'y'フラグが使用された場合、
// ^は常に入力の始まりにのみマッチ
// ('m'がtrueの場合は、最初の行にマッチ)

var regex = /^foo/y;
regex.lastIndex = 2;
console.log(regex.test('..foo'));  // false

var regex2 = /^foo/my;
regex2.lastIndex = 2;
console.log(regex2.test('..foo'));  // false

regex2.lastIndex = 2;
console.log(regex2.test('.\nfoo'));  // true