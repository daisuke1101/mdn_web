var obj = {
  prop: function() {},
  foo: 'bar'
};

// 新しいプロパティは追加でき、既存のプロパティは変更や削除ができます。
obj.foo = 'baz';
obj.lumpy = 'woof';
delete obj.prop;

var o = Object.seal(obj);

o === obj; // true
Object.isSealed(obj); // true

// 封印されたオブジェクトで、プロパティの値の変更は依然としてできます。
obj.foo = 'quux';

// しかし、データプロパティからアクセサプロパティの変換やその逆はできません。
Object.defineProperty(obj, 'foo', {
  get: function() { return 'g'; }
}); // TypeError が発生

// プロパティの値の変更を除き、あらゆる変更が失敗します。
obj.quaxxor = 'the friendly duck';
// 暗黙的にプロパティは追加されません。
delete obj.foo;
// 暗黙的にプロパティは削除されません。

// また、 strict モードではこれらの試みに対して TypeErrors が発生します。
function fail() {
  'use strict';
  delete obj.foo; // TypeError が発生
  obj.sparky = 'arf'; // TypeError が発生
}
fail();

// Object.defineProperty を用いて追加しようとしてもエラーが発生します
Object.defineProperty(obj, 'ohai', {
  value: 17
}); // TypeError が発生
Object.defineProperty(obj, 'foo', {
  value: 'eit'
}); // 既存のプロパティの値を変更
