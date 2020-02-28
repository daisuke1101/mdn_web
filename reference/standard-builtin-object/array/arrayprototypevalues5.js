var arr = ['a', 'b', 'c', 'd', 'e'];
var iterator = arr.values();
console.log(iterator);  // 

console.log(iterator.next().value);  // a
arr[1] = 'n';
console.log(iterator.next().value);  // n

// Array Iteratorオブジェクトには値は格納されず、
// 作成に使用された配列のアドレスが格納される