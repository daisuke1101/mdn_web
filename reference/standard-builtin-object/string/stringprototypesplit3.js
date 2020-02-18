var names = 'Harry Trump ;Fred Barney; Helen Rigby ; Bill Abel ;Chris Hand ';

console.log(names);  // Harry Trump ;Fred Barney; Helen Rigby ; Bill Abel ;Chris Hand 

var re = /\s*(?:;|$)\s*/;
var nameList = names.split(re);

console.log(nameList);  //  ["Harry Trump", "Fred Barney", "Helen Rigby", "Bill Abel", "Chris Hand", ""]
