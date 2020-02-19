const regex1 = new RegExp('\u{61}');
const regex2 = new RegExp('\u{61}', 'u');

console.log(regex1.unicode);  // false

console.log(regex2.unicode);  // true

console.log(regex1.source);  // a

console.log(regex2.source);  // a