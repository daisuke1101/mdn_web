function isBigEnough(element, index, array) {
    return element >= 10;
}
console.log(new Uint8Array([12, 5, 8, 130, 44]).filter(isBigEnough));  // Uint8Array(3) [12, 130, 44]