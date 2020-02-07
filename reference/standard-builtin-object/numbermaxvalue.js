function multiply(x, y) {
    if (x * y > Number.MAX_VALUE) {
        return ('Process as INFINITY');
    }
    return (x * y);
}

console.log(multiply(1.7976931348623157e+308, 1));  // 1.7976931348623157e+308
console.log(multiply(1.7976931348623157e+308, 2));  // Process as INFINITY