var arr = new Uint8Array([10, 20, 30, 40, 50]);
var eArray = arr.entries();
// your browser must support for..of loop
// and let-scoped variables in for loops
for (let n of eArray) {
  console.log(n);
}
// (2) [0, 10]
// (2) [1, 20]
// (2) [2, 30]
// (2) [3, 40]
// (2) [4, 50]
