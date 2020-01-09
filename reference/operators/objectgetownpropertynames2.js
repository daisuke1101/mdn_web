var arr = ['a', 'b', 'c'];
console.log(Object.getOwnPropertyNames(arr).sort());
// ["0", "1", "2", "length"] と出力されます

// Array-like object
var obj = { 0: 'a', 1: 'b', 2: 'c' };
console.log(Object.getOwnPropertyNames(obj).sort());
// ["0", "1", "2"] と出力されます

// Array.forEach
Object.getOwnPropertyNames(obj).forEach(
  function (val, idx, array) {
  console.log(val + ' -> ' + obj[val]);
  }
);
// 出力結果
// 0 -> a
// 1 -> b
// 2 -> c

// 列挙不可プロパティ
var my_obj = Object.create({}, {
  getFoo: {
    value: function() { return this.foo; },
    enumerable: false
  }
});
my_obj.foo = 1;

console.log(Object.getOwnPropertyNames(my_obj).sort());
// ["foo", "getFoo"] と出力されます

