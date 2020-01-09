Object.is('foo', 'foo');  // true
Object.is(window, window);  // true

Object.is('foo', 'bar');  // false
Object.is([], []);  // false(空の配列同士は同一ではない)

var foo = { a: 1 };
var bar = { a: 1 };
Object.is(foo, foo);  // true(同一のオブジェクト)
Object.is(foo, bar);  // false(中身は同じでも、異なるオブジェクト)

Object.is(null, null);  // true

// 特殊なケース
Object.is(0, -0);  // false(+0と-0は別物)
Object.is(-0, -0);  // true
Object.is(NaN, 0/0);  // true(0/0はNaN)

