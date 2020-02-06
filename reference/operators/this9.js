// アロー関数
// グローバルコードでは、グローバルオブジェクトが設定されます。
var globalObject = this;
var foo = (() => this);
console.log(foo() === globalObject);  // true