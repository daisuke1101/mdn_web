console.log(Symbol('desc').toString());  // Symbol(desc)を表示

// well-known symbols
console.log(Symbol.iterator.toString());  // Symbol(Symbol.iterator)を表示

// global symbols
console.log(Symbol.for('foo').toString());  // Symbol(foo)を表示