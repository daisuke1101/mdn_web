var myMap = new Map();
myMap.set(0, 'zero');
myMap.set(1, 'one');
myMap.set(2, 'two');

for (var [key, value] of myMap) {
    console.log(key + ' = ' + value);
}
// 0 = zero
// 1 = one
// 2 = two

for (var key of myMap.keys()) {
    console.log(key);
}
// 0
// 1
// 2

for (var value of myMap.values()) {
    console.log(value);
}
// zero
// one
// two

for (var [key, value] of myMap.entries()) {
    console.log(key + ' = ' + value);
}
// 0 = zero
// 1 = one
// 2 = two