function isPrime(element, index, array) {
    var start = 2;
    while (start <= Math.sqrt(element)) {
        if (element % start++ < 1) {
            return false;
        }
    }
    return element > 1;  // 素数は2以上
}
var uint8 = new Uint8Array([4, 5, 8, 12]);
console.log(uint8.find(isPrime));  // 5