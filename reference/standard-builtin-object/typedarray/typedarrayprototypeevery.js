function isBigEnough(element, index, array) {
    return element >= 10;
}

console.log(new Uint8Array([12, 5, 8, 130, 44]).every(isBigEnough));   // false
console.log(new Uint8Array([12, 54, 18, 130, 44]).every(isBigEnough));  // true