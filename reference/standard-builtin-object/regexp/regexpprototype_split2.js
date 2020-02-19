var re = /-/g;
var str = '2020-07-24';
var result = re[Symbol.split](str);

console.log(result);  // (3) ["2020", "07", "24"]
// 0: "2020"
// 1: "07"
// 2: "24"
// length: 3
// __proto__: Array(0)