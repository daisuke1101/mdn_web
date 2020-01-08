var o = {};  // 新しいオブジェクトの生成

// データ記述子により、 defineProperty を用いて
// オブジェクトプロパティを追加する例
Object.defineProperty(o, 'a', {
  value: 37,
  writable: true,
  enumerable: true,
  configurable: true
});
// o オブジェクトに 'a' プロパティが存在するようになり、その値は 37 となります

// アクセサー記述子により、 defineProperty を用いて
// オブジェクトプロパティを追加する例
var bValue = 38;
Object.defineProperty(o, 'b', {
  // メソッド名ショートハンドを利用しています(ES2015 の機能)。
  // 次のように書いているのと同じことです:
  // get: function() { return bValue; },
  // set: function(newValue) { bValue = newValue; },
  get() { return bValue; },
  set(newValue) { bValue = newValue; },
  enumerable: true,
  configurable: true
});
o.b;  // 38
// o オブジェクトに 'b' プロパティが存在するようになり、
// その値は 38 となります
// o.b は再定義されない限り、その値は常に bValue と同じです。

// (訳注:データとアクセサーを)両方を混在させることはできません:
Object.defineProperty(o, 'conflict', {
  value: 0x9f91102,
  get() { return 0xdeadbeef; }
});
// TypeError が発生します。 value はデータ記述子にのみ、
// get はアクセサー記述子にのみ存在していなければなりません。
