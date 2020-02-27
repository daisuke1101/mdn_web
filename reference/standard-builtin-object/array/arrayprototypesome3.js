var fruits = ['りんご', 'バナナ', 'キウイフルーツ', 'すいか'];

function checkAvailability(arr, val) {
    return arr.some(function (arrVal) {
        return val === arrVal;
    });
}

console.log(checkAvailability(fruits, 'いちご'));  // false
console.log(checkAvailability(fruits, 'すいか'));  // true