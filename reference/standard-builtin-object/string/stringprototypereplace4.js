var re = /apples/gi;
var str = 'Apples are round, and apples are juicy.';

var newstr = str.replace(re,'oranges');
console.log(newstr);  // oranges are round, and oranges are juicy.