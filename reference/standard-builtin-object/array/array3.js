var arr = ['１つめ', '２つめ', '３つめ', '最後'];

console.log(arr[0]);  // １つめ
console.log(arr[1]);  // ２つめ
console.log(arr[arr.length - 1]);  // 最後

console.log(arr[4]);  // これはundefinedとなってしまう

//console.log(arr.0);  // ERROR!
// Uncaught SyntaxError: missing ) after argument list

console.log(arr['0'] == arr[0]);  // true
console.log(arr['2'] != arr['02']);  // true