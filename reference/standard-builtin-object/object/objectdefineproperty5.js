var o = {};
Object.defineProperty(o, 'a', {
  value: 1,
  enumerable: true
});
Object.defineProperty(o, 'b', {
  value: 2,
  enumerable: false
});
Object.defineProperty(o, 'c', {
  value: 3,
});  // enumerable の既定値は false
o.d = 4;  // このようにプロパティを生成するとき、enumerable の既定値は true

Object.defineProperty(o, Symbol.for('e'), {
  value: 5,
  enumerable: true
});
Object.defineProperty(o, Symbol.for('f'), {
  value: 6,
  enumerable: false
});

for (var i in o) {
  console.log(i);
}
// 'a' と 'd' がログされます(順不同)

Object.keys(o);  // ['a', 'd']

o.propertyIsEnumerable('a');  // true
o.propertyIsEnumerable('b');  // false
o.propertyIsEnumerable('c');  // false
o.propertyIsEnumerable('d');  // true
o.propertyIsEnumerable(Symbol.for('e'));  // true
o.propertyIsEnumerable(Symbol.for('f'));  // false

var p = { ...o };
p.a;  // 1
p.b;  // undefined
p.c;  // undefined
p.d;  // 4
p[Symbol.for('e')];  // 5
p[Symbol.for('f')];  // undefined

