var obj1 = { foo: 'bar', baz: 42 };
console.log(Object.values(obj1));  // ['bar', 42]

// 配列様オブジェクト
var obj2 = { 0: 'a', 1: 'b', 2: 'c' };
console.log(Object.values(obj2));  // ['a', 'b', 'c']

// Randomなキー順序を持つ場合
var an_obj = { 100: 'a', 2: 'b', 7: 'c' };
console.log(Object.values(an_obj));  // ['b', 'c', 'a']

// 列挙不可のプロパティ
var my_obj = Object.create({}, { getFoo: { value: function() { return this.foo; }}});
my_obj.foo = 'bar';
console.log(Object.values(my_obj));  // ['bar']

// 非オブジェクト引数はオブジェクトへと型変換
console.log(Object.values('foo'));  //  ['f', 'o', 'o']