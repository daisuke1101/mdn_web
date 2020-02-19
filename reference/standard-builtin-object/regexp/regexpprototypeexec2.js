var re = /quick\s(brown).+?(jumps)/ig;
var result = re.exec('The Quick Brown Fox Jumps Over The Lazy Dog');  // 

console.log(result);  // ["Quick Brown Fox Jumps", "Brown", "Jumps", index: 4, input: "The Quick Brown Fox Jumps Over The Lazy Dog", groups: undefined]
// 0: "Quick Brown Fox Jumps"
// 1: "Brown"
// 2: "Jumps"
// index: 4
// input: "The Quick Brown Fox Jumps Over The Lazy Dog"
// groups: undefined
// length: 3
// __proto__: Array(0)

console.log(re);
// (3) ["Quick Brown Fox Jumps", "Brown", "Jumps", index: 4, input: "The Quick Brown Fox Jumps Over The Lazy Dog", groups: undefined]
// 0: "Quick Brown Fox Jumps"
// 1: "Brown"
// 2: "Jumps"
// index: 4
// input: "The Quick Brown Fox Jumps Over The Lazy Dog"
// groups: undefined
// length: 3
// __proto__: Array(0)
// /quick\s(brown).+?(jumps)/gi

console.log(re.lastIndex);  // 25
console.log(re.ignoreCase);  // true
console.log(re.global);  // true
console.log(re.multiline);  // false
console.log(re.source);  // quick\s(brown).+?(jumps)