console.log(Symbol.for('bar') === Symbol.for('bar'));  // trueを表示

console.log(Symbol('bar') === Symbol('bar'));  // falseを表示

const symbol1 = Symbol.for('foo');

console.log(symbol1.toString());  // Symbol(foo)を表示