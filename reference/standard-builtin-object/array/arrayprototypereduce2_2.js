//var sum = [0, 1, 2, 3].reduce(function (accumulator, currentValue) {
//    return accumulator + currentValue;
//}, 0);

var sum = [0, 1, 2, 3].reduce(
    (accumulator, currentValue) => {return accumulator + currentValue;}, 0);

console.log(sum);  // 6