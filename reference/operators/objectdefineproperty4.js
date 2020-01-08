var o = {};  // 新しいオブジェクトの生成

Object.defineProperty(o, 'a', {
  value: 37,
  writable: false
});

console.log(o.a);  // 37
o.a = 25;  // エラー発生せず(strictモードではエラーを投げる)
console.log(o.a);  // 37

// strict mode
(function() {
  'use strict';
  var o = {};
  Object.defineProperty(o, 'b', {
    value: 2,
    writable: false
  });
  o.b = 3;  // TypeErrorがスローされます
  return o.b;  //
}());
