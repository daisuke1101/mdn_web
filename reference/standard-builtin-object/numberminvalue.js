function multiply (x, y) {
    if (x * y < Number.MIN_VALUE) {
        return 'Process as -INFINITY';
    }
    return (x * y);
}

console.log(multiply(5e-324, 1));  // 5e-324

console.log(multiply(-1.7976931348623157e+308, 2));  // Process as -INFINITY