var buffer = new ArrayBuffer(8);

var uint8a = new Uint8Array(buffer);
console.log(uint8a.byteOffset);  // 0(byteOffsetを設定せず)

var uint8b = new Uint8Array(buffer, 3);
console.log(uint8b.byteOffset);  // 3(byteOffsetを3に設定)