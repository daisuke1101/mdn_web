const object1 = {a: 'foo', b: 42, c: {}};

console.log(object1.a);

const a = 'foo';
const b = 42;
const c = {};
const object2 = {a: a, b: b, c: c};

console.log(object2.b);

const object3 = {a, b, c};

console.log(object3.a);
