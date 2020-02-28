var myMap = new Map();
myMap.set(0, 'zero');
myMap.set(1, 'one');
myMap.set(2, 'two');

myMap.forEach(function(value, key) {
    console.log(key + ' = ' + value);
});
// 0 = zero
// 1 = one
// 2 = two