console.log(new RegExp('a+b+c'));  // /a+b+c/

console.log(new RegExp('a+b+c').toString());  // /a+b+c/

console.log(new RegExp('bar', 'g').toString());  // /bar/g

console.log(new RegExp('\n', 'g').toString());  // /\n/g(エスケープをサポートさたブラウザの場合)


console.log(new RegExp('\\n', 'g').toString());  // /\n/g
