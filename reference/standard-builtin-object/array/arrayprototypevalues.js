const array1 = ['a', 'b', 'c'];
const iterator = array1.values();  // 配列の各Index値のみ、新規Iteratorに格納

for (const value of iterator) {
    console.log(value);
}

// a
// b
// c