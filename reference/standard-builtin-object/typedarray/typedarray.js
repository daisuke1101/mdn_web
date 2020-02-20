// bytes単位のTypedArrayを新規に作成
const typedArray1 = new Int8Array(8);
typedArray1[0] = 32;

const typedArray2 = new Int8Array(typedArray1);
typedArray2[1] = 42;

console.log(typedArray1);  // Int8Array(8) [32, 0, 0, 0, 0, 0, 0, 0]

console.log(typedArray2);  // Int8Array(8) [32, 42, 0, 0, 0, 0, 0, 0]