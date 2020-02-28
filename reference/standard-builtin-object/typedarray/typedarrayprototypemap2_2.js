var numbers = new Uint8Array([1, 4, 9]);
var doubles = numbers.map((num) => num * 2);
console.log(numbers);  // Uint8Array(3) [1, 4, 9]
console.log(doubles);  // Uint8Array(3) [2, 8, 18]