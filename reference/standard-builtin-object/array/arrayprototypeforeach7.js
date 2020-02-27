var words = ['one', 'two', 'three', 'four'];
words.forEach(function(word) {
  console.log(word);
  if (word === 'two') {
    words.shift();
  }
});

// one
// two
// four

// forEach()は、繰り返しの前に配列のコピーを作成しません。