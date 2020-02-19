const str = 'table football';

const regex = RegExp('foo*');
const globalRegex = RegExp('foo*', 'g');

console.log(regex.test(str));  // true

console.log(regex.test(str));  // true

console.log(globalRegex.lastIndex);  // 0

console.log(globalRegex.test(str));  // true

console.log(globalRegex.lastIndex);  // 9

console.log(globalRegex.test(str));  // false