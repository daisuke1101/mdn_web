var v1 = 'abc';
var v2 = true;
var v3 = 10;
var v4 = Symbol('foo');

var obj = Object.assign({}, v1, null, v2, undefined, v3, v4);
// プリミティブ値はラップされ、null と undefined は無視される
// なお、文字列をラップした時だけ、直接所有で列挙可能なプロパティが存在する

console.log(obj);
