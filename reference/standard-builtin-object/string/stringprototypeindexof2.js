console.log(('Blue Whale'.indexOf('Blue')));  // 0
console.log(('Blue Whale'.indexOf('Blute')));  // -1
console.log(('Blue Whale'.indexOf('Whale', 0)));  // 5
console.log(('Blue Whale'.indexOf('Whale', 5)));  // 5
console.log(('Blue Whale'.indexOf('Whale', 7)));  // -1
console.log(('Blue Whale'.indexOf('')));  // 0
console.log(('Blue Whale'.indexOf('', 9)));  // 9
console.log(('Blue Whale'.indexOf('', 10)));  // 10
console.log(('Blue Whale'.indexOf('', 11)));  // 10

console.log(('Blue Whale'.indexOf('Blue') !== -1));  // true
console.log(('Blue Whale'.indexOf('Bloe') !== -1));  // false