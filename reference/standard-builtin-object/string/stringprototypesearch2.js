var str = 'hey JudE';
var re = /[A-Z]/g;
var re2 = /[.]/g;

console.log(str.search(re));  // 4('J'がマッチ)
console.log(str.search(re2));  // -1(マッチする文字なし)