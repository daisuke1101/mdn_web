var people = [
    { name: 'Alice', age: 21 },
    { name: 'Bluce', age: 20},
    { name: 'Jane', age: 20}
];

function groupBy(objectArray, property) {
    return objectArray.reduce(function(acc, obj) {
        var key = obj[property];
        if(!acc[key]) {
            acc[key] = [];
        }
        acc[key].push(obj);
        return acc;
    }, {});
}

var groupedPeople = groupBy(people, 'age');

console.log(groupedPeople);
// {20: Array(2), 21: Array(1)}
// 20: Array(2)
// 0: {name: "Bluce", age: 20}
// 1: {name: "Jane", age: 20}
// length: 2
// __proto__: Array(0)
// 21: Array(1)
// 0: {name: "Alice", age: 21}
// length: 1
// __proto__: Array(0)
// __proto__: Object