var str = 'abc';

console.log(str.padEnd(10));  // abc       
console.log(str.padEnd(10, 'foo'));  // abcfoofoof
console.log(str.padEnd(6, '123456'));  // abc123
console.log(str.padEnd(1));  // abc