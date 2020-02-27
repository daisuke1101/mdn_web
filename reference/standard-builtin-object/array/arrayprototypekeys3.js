var arr = ['a', , 'c'];
var sparseKeys = Object.keys(arr);
var denseKeys = [...arr.keys()];

console.log(sparseKeys);  // (2) ["0", "2"]
console.log(denseKeys);  // (3) [0, 1, 2](Key Iteratorは抜けを無視しない)