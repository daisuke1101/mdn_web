var arr = ['a', 'b', 'c', 'd', 'e'];
var iterator = arr.values();

// 1回目
for (let letter of iterator) {
    console.log(letter);
}
// a
// b
// c
// d
// e

//2回目
for (let letter of iterator) {
    console.log(letter);
}
// undefined(一度処理されたarray.iteratorは、中身が空になってしまう)