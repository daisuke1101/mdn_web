var mySet = new Set();

mySet.add(1);
mySet.add(5);
mySet.add(5);  // Setには重複する値は設定できない
mySet.add('some text');
var o = {a: 1, b: 2};
mySet.add(o);

mySet.add({a: 1, b: 2});  // oとは別オブジェクトとみなされる

console.log(mySet);  // Set(5) {1, 5, "some text", {…}, {…}}

console.log(mySet.has(1));  // true
console.log(mySet.has(3));  // false
console.log(mySet.has(5));  // true
console.log(mySet.has(Math.sqrt(25)));  // true
console.log(mySet.has('Some Text'.toLowerCase()));  // true
console.log(mySet.has(o));  // true

console.log(mySet.size);  // 5

mySet.delete(5);
console.log(mySet.has(5));  // false
console.log(mySet.size);  // 4
console.log(mySet);  // Set(4) {1, "some text", {…}, {…}}