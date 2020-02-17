const a = 'réservé'; // with accents, lowercase
const b = 'RESERVE'; // no accents, uppercase

console.log(a.localeCompare(b));  // 1

console.log(a.localeCompare(b, 'en', {sensitivity: 'base'}));  // 0