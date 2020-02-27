function flatten(arr) {
    const result = [];

    arr.forEach((i) => {
        if (Array.isArray(i)) {
            result.push(...flatten(i))
        } else {
            result.push(i);
        }
        
    });

    return result;
}

const probrem = [1, 2, 3, [4, 5, [6, 7], 8, 9]];

console.log(flatten(probrem));  // (9) [1, 2, 3, 4, 5, 6, 7, 8, 9]