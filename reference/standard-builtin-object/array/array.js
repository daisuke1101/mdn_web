var fruits = ['りんご', 'バナナ'];

console.log(fruits.length);  // 2

var first = fruits[0];
console.log(first);  // りんご

var last = fruits[fruits.length - 1];
console.log(last);  // バナナ

fruits.forEach(function(item, index, array) {
    console.log(item, index);
});
// りんご 0
// バナナ 1

var newLength = fruits.push('みかん');
console.log(newLength);  // 3
console.log(fruits);  // (3) ["りんご", "バナナ", "みかん"]
// 0: "りんご"
// 1: "バナナ"
// 2: "みかん"
// length: 3
// __proto__: Array(0)

last = fruits.pop();
console.log(last);  // みかん
console.log(fruits);  // (2) ["りんご", "バナナ"]

first = fruits.shift();
console.log(first);  // りんご
console.log(fruits);  // ["バナナ"]

newLength = fruits.unshift('いちご');
console.log(newLength)  // 2
console.log(fruits);  // (2) ["いちご", "バナナ"]

fruits.push('キウイフルーツ');
console.log(fruits);  // (3) ["いちご", "バナナ", "キウイフルーツ"]
var pos = fruits.indexOf('バナナ');
console.log(pos);  // 1

var removedItem = fruits.splice(pos, 1);
console.log(removedItem);  // ["バナナ"]
console.log(fruits);  // (2) ["いちご", "キウイフルーツ"]

var shallowCopy = fruits.slice();
console.log(shallowCopy);  // ["いちご", "キウイフルーツ"]