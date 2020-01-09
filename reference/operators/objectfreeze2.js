var obj = {
  prop: function() {},
  foo: 'bar'
};

// 凍結前: 新しいプロパティが追加でき、
// 既存のプロパティは変更や削除ができます
obj.foo = 'baz';
obj.lumpy = 'woof';
delete obj.prop;

// 凍結
var o = Object.freeze(obj);

// 返値は渡したオブジェクトとまったく同じものです。
o === obj;

// オブジェクトは凍結されています。
Object.isFrozen(obj);

// すべての変更が失敗するようになりました
obj.foo = 'quux';  // 暗黙的に何も行われません
// 暗黙的にプロパティは追加されません
obj.quaxxor = 'the friendly duck';

// また、 strict モードではこれらの試みに対して TypeErrors が発生します
function fail(){
  'use strict';
  obj.foo = 'sparky';
  delete obj.foo;
  delete obj.quaxxor;
  obj.sparky = 'arf';
}

fail();

// Object.defineProperty; から変更を試みますが、
// 以下のどちらの文も TypeError が発生します。
Object.defineProperty(obj, 'ohai', { value: 17 });
Object.defineProperty(obj, 'foo', { value: 'eit' });

// プロトタイプを変更することもできず、
// 以下のどちらの文も TypeError が発生します。
Object.setPrototypeOf(obj, { x: 20 })
obj.__proto__ = { x: 20 }
