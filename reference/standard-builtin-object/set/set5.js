mySet2 = new Set([1, 2, 3, 4]);
console.log(mySet2.size);  // 4
console.log([...mySet2]);  // (4) [1, 2, 3, 4]

// var intersection = new Set([...set1].filter(x => set2.has(x)));
// var difference = new Set([...set1].filter(x => !set2.has(x)));

mySet2.forEach(value => {
    console.log(value);
});

// 1
// 2
// 3
// 4