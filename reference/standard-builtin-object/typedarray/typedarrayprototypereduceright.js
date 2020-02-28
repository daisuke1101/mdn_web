var total = new Uint8Array([0, 1, 2, 3]).reduceRight(function(a, b) {
    return a + b;
});
console.log(total);  // 6