function fits(x, y) {
    if(Number.isInteger (y / x)) {
        return 'Fits!';
    }
    return 'Doesn\'t fit!';
}

console.log(fits(5, 10));  // Fits!

console.log(fits(5, 11));  // Doesn't fit!