var flattened = [[0, 1], [2, 3], [4, 5]].reduceRight((a, b) => a.concat(b));

console.log(flattened);  // (6) [4, 5, 2, 3, 0, 1]