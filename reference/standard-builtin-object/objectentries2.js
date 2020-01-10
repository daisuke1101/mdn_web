const obj1 = { foo: 'bar', baz: 42 };
console.log(Object.entries(obj1));

// 配列様オブジェクト
const obj2 = { 0: 'a', 1: 'b', 2: 'c' };
console.log(Object.entries(obj2));

// RandomなKeyを持つ配列様オブジェクト
const anObj = { 100: 'a', 2: 'b', 7: 'c' };
console.log(Object.entries(anObj));

// 列挙不可プロパティを含む場合
const myObj = Object.create({},{ getFoo: { value() { return this.foo; }}});
myObj.foo = 'bar';
console.log(Object.entries(myObj));

// オブジェクトでない引数はオブジェクトへ型変更
console.log(Object.entries('foo'));

// returns an empty array for any primitive type, since primitives have no own properties
console.log(Object.entries(100));

// iterate through key-value gracefully
const obj3 = { a: 5, b: 7, c: 9 };
for (const [key, value] of Object.entries(obj3)) {
  console.log(`${key} ${value}`);
}

// Or, using array extras
Object.entries(obj3).forEach(([key, value]) => {
console.log(`${key} ${value}`);
});

