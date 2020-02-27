var numbers = [1, 4, 9];
var roots = numbers.map(function(num) {
    return Math.sqrt(num);
})

console.log(roots);  // (3) [1, 2, 3]
console.log(numbers);  // (3) [1, 4, 9]