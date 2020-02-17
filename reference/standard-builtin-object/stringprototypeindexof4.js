var myString = 'brie, pepper jack, cheddar';
var myCapString = 'Brie, Pepper Jack, Cheddar';

console.log('myString.indexOf("cheddar") is ' + myString.indexOf('cheddar'));  // myString.indexOf("cheddar") is 19

console.log('myCapString.indexOf("cheddar") is ' + myCapString.indexOf('cheddar'));  // myCapString.indexOf("cheddar") is -1(大文字と小文字は区別される)