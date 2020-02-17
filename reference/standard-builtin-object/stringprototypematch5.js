var str1 = 'NaN means not a number. Infinity contains -Infinity and +Infinity in JavaScript.';
var str2 = 'My grandfather is 65 years old and My grandmother is 63 years old.';
var str3 = 'The contract was declared null and void.';

console.log(str1.match('number'));  // ["number", index: 16, input: "NaN means not a number. Infinity contains -Infinity and +Infinity in JavaScript.", groups: undefined]
console.log(str1.match(NaN));  // ["NaN", index: 0, input: "NaN means not a number. Infinity contains -Infinity and +Infinity in JavaScript.", groups: undefined]
console.log(str1.match(Infinity));  // ["Infinity", index: 24, input: "NaN means not a number. Infinity contains -Infinity and +Infinity in JavaScript.", groups: undefined]
console.log(str1.match(+Infinity));  // ["Infinity", index: 24, input: "NaN means not a number. Infinity contains -Infinity and +Infinity in JavaScript.", groups: undefined]
console.log(str1.match(-Infinity));  // ["-Infinity", index: 42, input: "NaN means not a number. Infinity contains -Infinity and +Infinity in JavaScript.", groups: undefined]
console.log(str2.match(65));  // ["65", index: 18, input: "My grandfather is 65 years old and My grandmother is 63 years old.", groups: undefined]
console.log(str2.match(+65));  // ["65", index: 18, input: "My grandfather is 65 years old and My grandmother is 63 years old.", groups: undefined]
console.log(str3.match(null));  // ["null", index: 26, input: "The contract was declared null and void.", groups: undefined]