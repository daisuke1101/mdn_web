var buffer = new ArrayBuffer(8);
var dataview = new DataView(buffer);
console.log(dataview.byteLength);  // 8

var dataview2 = new DataView(buffer, 1, 5);
console.log(dataview2.byteLength);  // 5

var dataview3 = new DataView(buffer, 2);
console.log(dataview3.byteLength);  // 6