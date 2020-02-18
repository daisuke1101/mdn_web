const paragraph = 'The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?';

const regex = /[^\w\s]/g;

console.log(paragraph.search(regex));  // 43

console.log(paragraph[paragraph.search(regex)]);  // .