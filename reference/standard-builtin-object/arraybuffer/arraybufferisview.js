console.log(ArrayBuffer.isView());  // fales
console.log(ArrayBuffer.isView([]));  // false
console.log(ArrayBuffer.isView({}));  // false
console.log(ArrayBuffer.isView(null));  // false
console.log(ArrayBuffer.isView(undefined));  // false
console.log(ArrayBuffer.isView(new ArrayBuffer(10)));  // false(新規ArrayBuffer自体はfalseを返す)

console.log(ArrayBuffer.isView(new Uint8Array()));  // true
console.log(ArrayBuffer.isView(new Float32Array()));  // true
console.log(ArrayBuffer.isView(new Int8Array(10).subarray(0, 3)));  // true

var buffer = new ArrayBuffer(2);
var dv = new DataView(buffer);
console.log(ArrayBuffer.isView(buffer));  // false
console.log(ArrayBuffer.isView(dv));  // true