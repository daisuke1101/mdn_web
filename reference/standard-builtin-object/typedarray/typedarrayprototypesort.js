var numbers = new Uint8Array([40, 1, 5, 200]);
console.log(numbers.sort());  // Uint8Array(4) [1, 5, 40, 200]

var numbers2 = [40, 1, 5, 200];
console.log(numbers2.sort());  // (4) [1, 200, 40, 5]

function compareNumbers(a, b) {
    return a - b;
}

console.log(numbers2.sort(compareNumbers));  // (4) [1, 5, 40, 200]