var mySet = new Set();

mySet.add(1);
mySet.add(5);
mySet.add(5);  // Setには重複する値は設定できない
mySet.add('some text');
var o = {a: 1, b: 2};
mySet.add(o);

mySet.add({a: 1, b: 2});  // oとは別オブジェクトとみなされる

for (var item of mySet) console.log(item);
// 1
// 5
// some text
// {a: 1, b: 2}
// {a: 1, b: 2}

for (var item of mySet.keys()) console.log(item);
// 1
// 5
// some text
// {a: 1, b: 2}
// {a: 1, b: 2}

for (var item of mySet.values()) console.log(item);
// 1
// 5
// some text
// {a: 1, b: 2}
// {a: 1, b: 2}

for (var [key, value] of mySet.entries()) console.log(key);
// 1
// 5
// some text
// {a: 1, b: 2}
// {a: 1, b: 2}

var myArr = Array.from(mySet);
console.log(myArr);  // (5) [1, 5, "some text", {…}, {…}]