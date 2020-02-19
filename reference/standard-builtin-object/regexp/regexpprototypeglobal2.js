var regex = new RegExp('foo', 'g');

console.log(regex.global);  // true

var str = 'fooexamplefoo';

var str1 = str.replace(regex, '');

console.log(str1);  // example

var regex1 = new RegExp('foo');

var str2 = str.replace(regex1, '');

console.log(str2);  // examplefoo