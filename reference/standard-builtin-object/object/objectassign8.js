var target = Object.defineProperty({}, 'foo', {
  value: 1,
  writable: false
});  // target.foo はread only

Object.assign(target, { bar: 2 }, { foo2: 3, foo: 3, foo3: 3 }, { baz: 4 });
// 例外！

console.log(target.bar);  // 2
console.log(target.foo2);  // 3
console.log(target.foo);  // 1
console.log(target.foo3);  // undefined
console.log(target.baz);  // undefined
