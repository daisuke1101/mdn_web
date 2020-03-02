var buf1 = new ArrayBuffer(40);
new Int32Array(buf1)[0] = 42;

var buf2 = ArrayBuffer.transfer(buf1, 80);
console.log(buf1.byteLength); // 0
console.log(buf2.byteLength); // 80
console.log(new Int32Array(buf2)[0]); // 42

var buf3 = ArrayBuffer.transfer(buf2, 0);
console.log(buf2.byteLength); // 0
console.log(buf3.byteLength); // 0