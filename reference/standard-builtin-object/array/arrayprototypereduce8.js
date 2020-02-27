var myArray = ['a', 'b', 'a', 'b', 'c', 'e', 'e', 'c', 'd', 'd', 'd', 'd'];
var myOrderedArray = myArray.reduce(function (accumulator, currentValue) {
    if(accumulator.indexOf(currentValue) === -1) {
        accumulator.push(currentValue);
    }
    return accumulator;
}, [])

console.log(myOrderedArray);  // (5) ["a", "b", "c", "e", "d"]