function checkNumber(smallNumber) {
    if(smallNumber === Number.NEGATIVE_INFINITY) {
        return 'Process number as -INFINITY';
    }
    return smallNumber;
}

console.log(checkNumber(-Number.MAX_VALUE));  // -1.7976931348623157e+308

console.log(checkNumber(-Number.MAX_VALUE * 2));  // Process number as -INFINITY