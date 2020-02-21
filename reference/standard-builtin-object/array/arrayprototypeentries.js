const array1 = ['a', 'b', 'c'];

const iterator1 = array1.entries();

console.log(iterator1.next().value);  // (2) [0, "a"]

console.log(iterator1.next().value);  // (2) [1, "b"]