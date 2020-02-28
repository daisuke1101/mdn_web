var arr = new Uint8Array([10, 20, 30, 40, 50]);
var eArray = arr.values();

for (let n of eArray) {
    console.log(n);
}

// 10
// 20
// 30
// 40
// 50