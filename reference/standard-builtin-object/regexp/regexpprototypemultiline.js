const regex1 = new RegExp('^football');
const regex2 = new RegExp('^football', 'm');

console.log(regex1.multiline);  // false

console.log(regex2.multiline);  // true

console.log(regex1.test('rugby\nfootball'));  // false

console.log(regex2.test('american\nfootball'));  // true