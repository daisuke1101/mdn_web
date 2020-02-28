var arr = ['a', 'b', 'c', 'd', 'e'];
var iterator = arr[Symbol.iterator]();

for (let letter of iterator) {
    console.log(letter);
}

// a
// b
// c
// d
// e