const str = 'The quick brown fox jumps over the lazy dog.';

const words = str.split(' ');
console.log(words[3]);  // fox

const chars = str.split('');
console.log(chars[8]);  // k

const strCopy = str.split();
console.log(strCopy);  // ["The quick brown fox jumps over the lazy dog."]