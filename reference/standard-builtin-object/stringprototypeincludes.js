const sentence = 'The quick brown fox jumps over the lazy dog.';

const word  = 'fox';

console.log(`The word "${word}" ${sentence.includes(word)? 'is' : 'isn\'t'} in the sentence`);  // The word "fox" is in the sentence