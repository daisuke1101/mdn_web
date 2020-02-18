var obj = Object.create({ foo: 1}, {  // foo は objのプロトタイプチェーン
  bar: {
    value: 2  // bar は列挙可能ではないプロパティ
  },
  baz: {
    value: 3,
    enumerable: true  // baz は直接所有で列挙可能なプロパティ
  }
});

var copy = Object.assign({}, obj);
console.log(copy);
