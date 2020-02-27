var flatted = [[0, 1], [2, 3], [4, 5]].reduce(
    (accumulator, currentValue) => accumulator.concat(currentValue), []
);

console.log(flatted);  // (6) [0, 1, 2, 3, 4, 5]