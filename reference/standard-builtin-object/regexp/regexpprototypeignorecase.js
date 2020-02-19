const regex1 = new RegExp('foo');
const regex2 = new RegExp('foo', 'i');

console.log(regex1.test('Football'));  // false

console.log(regex2.ignoreCase);  // true

console.log(regex2.test('Football'));  // true