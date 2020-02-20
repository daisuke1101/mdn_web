var fruits = [];
fruits.push('バナナ', 'りんご', 'もも', 'キウイフルーツ');

fruits[5] = 'すいか';
console.log(fruits[5]);  // すいか
fruits.length = 10;  // fruits.lengthを直接指定すると
console.log(Object.keys(fruits));  // (5) ["0", "1", "2", "3", "5"]
console.log(fruits.length);  // 10