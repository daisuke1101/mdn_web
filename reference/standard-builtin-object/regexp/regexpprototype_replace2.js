var re = /-/g;
var str = '2020-07-24';
var newstr = re[Symbol.replace](str, '.');

console.log(newstr);  // 2020.07.24