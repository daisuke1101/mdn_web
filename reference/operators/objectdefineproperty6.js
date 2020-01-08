var o = {};
Object.defineProperty(o, 'a', {
  get() { return 1; },
  configurable: false
});

Object.defineProperty(o, 'a', {
  configurable: true
});  // TypeError: Cannot redefine property: a
Object.defineProperty(o, 'a', {
  enumerable: true
});  // TypeError: Cannot redefine property: a
Object.defineProperty(o, 'a', {
  set() {}
});  // TypeError: Cannot redefine property: a (set は未定義)
Object.defineProperty(o, 'a', {
  get() { return 1; }
});  // TypeError: Cannot redefine property: a (新たな get は全く同じですが)
Object.defineProperty(o, 'a', {
  value: 12
});  // TypeError: Cannot redefine property: a

console.log(o.a);  // 1
delete o.a;  // 削除されず
console.log(o.a);  // 1



