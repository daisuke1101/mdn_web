var numbers = [1, 2, 3, 4, 5];
var length = numbers.length;

for (var i = 0; i < length; i++) {
    numbers[i] **= 2;
}

console.log(numbers);  // (5) [1, 4, 9, 16, 25]