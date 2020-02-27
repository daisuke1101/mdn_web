var kvArray = [
    {key: 1, value: 10},
    {key: 2, value: 20},
    {key: 3, value: 30}
];

var reformattedArray = kvArray.map(obj =>{
    var rObj = {};
    rObj[obj.key] = obj.value;
    return rObj;
})

console.log(reformattedArray);
// (3) [{…}, {…}, {…}]
// 0: {1: 10}
// 1: {2: 20}
// 2: {3: 30}
// length: 3
// __proto__: Array(0)

console.log(kvArray);
// (3) [{…}, {…}, {…}]
// 0: {key: 1, value: 10}
// 1: {key: 2, value: 20}
// 2: {key: 3, value: 30}
// length: 3
// __proto__: Array(0)