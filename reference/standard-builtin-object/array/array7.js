var fruits = [];
fruits.push('バナナ', 'りんご', 'もも', 'キウイフルーツ');

fruits[5] = 'すいか';
console.log(fruits[5]);  // すいか
fruits.length = 3;  // fruits.lengthを直接指定すると
console.log(Object.keys(fruits));  // (3) ["0", "1", "2"](length番目より後の要素は削除される)
console.log(fruits.length);  // 3