// 非整形イテレータの例
var nonWellFormedIterable = {}
nonWellFormedIterable[Symbol.iterator] = () => 1
[...nonWellFormedIterable]  // TypeError: [] is not a function