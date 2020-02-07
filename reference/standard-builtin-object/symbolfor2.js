Symbol.for('foo');  // 新規にシンボルを作成
Symbol.for('foo');  // 既に作成されたシンボルを呼び出し

// 同一のグローバルシンボル、しかしローカルではない
console.log(Symbol.for('bar') === Symbol.for('bar'));  // true
console.log(Symbol('bar') === Symbol('bar'));  // false

// キーは識別子としても使われる
var sym = Symbol.for('mario');
console.log(sym.toString());  // Symbol(mario)