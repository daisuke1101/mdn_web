var myArray = ['value1', 'value2', 'value3'];

var mySet = new Set(myArray);

console.log(mySet.has('value1'));  // true

console.log([...mySet]);  // (3) ["value1", "value2", "value3"]