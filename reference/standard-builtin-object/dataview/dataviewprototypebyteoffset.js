var buffer = new ArrayBuffer(8);
var dataview = new DataView(buffer);
console.log(dataview.byteOffset);  // 0

var dataview2 = new DataView(buffer, 3);
console.log(dataview2.byteOffset);  // 3