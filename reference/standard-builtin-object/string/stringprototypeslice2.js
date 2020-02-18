var str1 = 'The morning is upon us.'  // str1の長さは23
var str2 = str1.slice(1, 8),
    str3 = str1.slice(4, -2),
    str4 = str1.slice(12),
    str5 = str1.slice(30);

console.log(str2);  // he morn
console.log(str3);  // morning is upon u
console.log(str4);  // is upon us.
console.log(str5);  // ""