var globalObject = this;
var foo = (() => this);
console.log(foo() === globalObject); // trueを表示

// オブジェクトのメソッドとして呼び出した場合
var obj = {func: foo};
console.log(obj.func() === globalObject);  // trueを表示

// call を使用して this の設定を試みる
console.log(foo.call(obj) === globalObject);  // trueを表示

// bind を使用して this の設定を試みる
foo = foo.bind(obj);
console.log(foo() === globalObject);  // trueを表示