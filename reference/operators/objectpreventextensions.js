const object1 = {};

Object.preventExtensions(object1);  // 拡張不可＝プロパティ追加不可

try {
  Object.defineProperty(object1, 'property1', {
    value: 42
  });
} catch (e) {
  console.log(e);
  // TypeError: Cannot define property property1, object is not extensible
}

