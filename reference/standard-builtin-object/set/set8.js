var txt = 'Japan';
var mySet = new Set(txt);

console.log(mySet);  // Set(4) {"J", "a", "p", "n"}(２番目の'a'は削除されてしまう)
console.log(mySet.size);  // 4

for(v of mySet) console.log(v);

// J
// a
// p
// n