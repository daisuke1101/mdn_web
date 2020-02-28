var total = new Uint8Array([0, 1, 2, 3]).reduceRight((a, b) => a + b);
console.log(total);  // 6