const fruits = ['りんご', 'ぶどう', 'いちご', 'みかん', 'なし'];
const index = fruits.findIndex(fruit => fruit === 'みかん');

console.log(index);  // 3
console.log(fruits[index]);  // みかん