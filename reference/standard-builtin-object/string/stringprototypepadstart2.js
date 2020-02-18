str = 'abc';

console.log(str.padStart(10));  //        abc
console.log(str.padStart(10, 'foo'));  // foofoofabc
console.log(str.padStart(6, '123456'));  // 123abc
console.log(str.padStart(8, '0'));  // 00000abc
console.log(str.padStart(1));  // abc