var vegetables = ['Cabbage', 'Turnip', 'Radish', 'Carrot'];
console.log(vegetables);
// (4) ["Cabbage", "Turnip", "Radish", "Carrot"]

var pos = 1, n = 2;

var removedItems = vegetables.splice(pos, n);
// 複数の要素を削除するには、nで削除する要素数を定義し、
// posで削除開始位置を定義する(pos以降からn個削除)

console.log(vegetables);
// ["Cabbage", "Carrot"](1,4番目)

console.log(removedItems);
// ["Turnip", "Radish"](2,3番目)