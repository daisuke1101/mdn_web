// 単純な配列
var arr = ['a', 'b', 'c'];
console.log(Object.keys(arr));  // ['0', '1', '2']

// オブジェクト様配列
var obj = { 0: 'a', 1: 'b', 2: 'c' };
console.log(Object.keys(obj));  // ['0', '1', '2']

// キーの順序がRandom
var anObj = { 100: 'a', 2: 'b', 7: 'c' };
console.log(Object.keys(anObj));  // ['2', '7', '100']

// 列挙不可プロパティを含む
var myObj = Object.create({}, {
  getFoo: {
    value: function() { return this.foo; }
  }
});
myObj.foo = 1;
console.log(Object.keys(myObj));  // ['foo']
