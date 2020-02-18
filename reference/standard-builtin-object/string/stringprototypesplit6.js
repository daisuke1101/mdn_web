var myString = 'this|is|a|Test';
var splits = myString.split(['|']);

console.log(splits);  // ["this", "is", "a", "Test"]

var myString2 = 'ca,bc,a,bca,bca,bc';

var splits2 = myString2.split(['a', 'b']);

console.log(splits2);  // ["c", "c,", "c", "c", "c"]