var globalSym = Symbol.for('foo');  // 新規にシンボルを作成
console.log(Symbol.keyFor(globalSym));  // fooを表示

var localSym = Symbol();
console.log(Symbol.keyFor(localSym));  // undefinedを表示

// ウェルノウンシンボルはグローバルシンボルレジストリに登録されず
Symbol.keyFor(Symbol.iterator)  // undefinedを表示