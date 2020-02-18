function checkNumber(bigNumber) {
    if(bigNumber === Number.POSITIVE_INFINITY) {
        return 'Process number as INFINITY';
    }
    return bigNumber;
}

console.log(checkNumber(Number.MAX_VALUE));  // 1.7976931348623157e+308

console.log(checkNumber(Number.MAX_VALUE * 2));  // Process number as INFINITY