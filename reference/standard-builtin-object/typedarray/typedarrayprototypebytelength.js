var buffer = new ArrayBuffer(8);

var uint8a = new Uint8Array(buffer);
console.log(uint8a.byteLength);  // 8

var uint8b = new Uint8Array(buffer, 1, 5);
console.log(uint8b.byteLength);  // 5(byteOffset、lengthを指定した場合→公開するメモリ範囲は1からの5Bytes)

var uint8c = new Uint8Array(buffer, 2);
console.log(uint8c.byteLength);  // 6(byteOffsetのみ指定した場合→公開するメモリ範囲は2からの残りBuffer=6Bytes)