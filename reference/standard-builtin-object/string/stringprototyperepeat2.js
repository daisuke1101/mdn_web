str = 'abc';

console.log(str.repeat(0));  // 
console.log(str.repeat(1));  // abc
console.log(str.repeat(2));  // abcabc
console.log(str.repeat(3.5));  // abcabcabc
console.log(str.repeat(-1));  // RangeError(Invalid count value)
console.log(str.repeat(1/0));  // RangeError(Invalid count value)

({toString: () => str, repeat: String.prototype.repeat }). repeat(2);  // "abcabc"(repeat()は一般メソッド)