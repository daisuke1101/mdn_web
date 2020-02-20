function f() {
    return Array.from(arguments);
}

console.log(f(1, 2, 3, 4));  // (4) [1, 2, 3, 4]