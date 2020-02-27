var numbers = [1, 2, 3, 4];
var filteredNumbers = numbers.map(function(num, index) {
    if(index < 2) {
        return num;
    }
});

console.log(numbers);  // (4) [1, 2, 3, 4]
console.log(filteredNumbers);  // (4) [1, 2, undefined, undefined]