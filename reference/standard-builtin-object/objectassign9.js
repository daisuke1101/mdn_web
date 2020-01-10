var obj = {
  foo: 1,
  get bar() {
    return 2;
  }
};

var copy = Object.assign({}, obj);
console.log(copy);
// { foo: 1, bar: 2 } copy.bar の値は、obj.bar のGetter返値

// 記述子を完全にコピーする代入関数
function completeAssign(target, ...sources) {
  sources.forEach(source => {
    let descriptors = Object.keys(source).reduce((descriptors, key) => {
      descriptors[key] = Object.getOwnPropertyDescriptor(source, key);
      return descriptors;
    }, {});
    // デフォルトでは、 Object.assign は列挙可能なシンボルもコピー
    Object.getOwnPropertySymbols(source).forEach(sym => {
      let descriptor = Object.getOwnPropertyDescriptor(source, sym);
      if (descriptor.enumerable) {
        descriptors[sym] = descriptor;
      }
    });
    Object.defineProperties(target, descriptors);
  });
  return target;
}

var copy = completeAssign({}, obj);
console.log(copy);

