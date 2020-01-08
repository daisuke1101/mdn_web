// __proto__ を使うやり方
var obj = {};
var descriptor = Object.create(null);  // 意図しないキーの継承を防止します。
// デフォルトの挙動により、継承不能、変更不能、書換不能なプロパティとなります。
descriptor.value = 'static';
Object.defineProperty(obj, 'key', descriptor);

// 明示的な指定
Object.defineProperty(obj, 'key', {
  enumerable: false,
  configurable: false,
  writable: false,
  value: 'static'
});

// 同じオブジェクトを再利用
function withValue(value) {
  var d = withValue.d || (
    withValue.d = {
      enumerable: false,
      writable: false,
      configurable: false,
      value: null
    }
  );
  // 値の代入で重複操作を防ぐ
  if(d.value !== value) d.value = value;

  return d;
}
// このように使います。
Object.defineProperty(obj, 'key', withValue('static'));

// freeze が利用できるなら、オブジェクトのプロトタイプのプロパティ
// (value, get, set, enumerable, writable, configurable) を
// 追加・削除することを防ぐことができます。
(Object.freeze || Object)(Object.prototype);
