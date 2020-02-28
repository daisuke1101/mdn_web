var arr = ['a', 'b', 'c', 'd', 'e'];
var iterator = arr.values();

console.log(iterator.next());  // {value: "a", done: false}
console.log(iterator.next().value);  // b
console.log(iterator.next()['value']);  // c
console.log(iterator.next());  // {value: "d", done: false}
console.log(iterator.next());  // {value: "e", done: false}
console.log(iterator.next());  // {value: undefined, done: true}
console.log(iterator.next().value);  // undefined