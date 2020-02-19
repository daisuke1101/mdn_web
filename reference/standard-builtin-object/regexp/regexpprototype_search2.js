var re = /-/g;
var str = '2020-07-24';
var result = re[Symbol.search](str);

console.log(result);  // 4