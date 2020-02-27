var initialValue = 0;
var sum = [{x: 1}, {x: 2}, {x: 3}].reduce((accumulator, currentValue) => accumulator + currentValue.x, initialValue);

console.log(sum);  // 6