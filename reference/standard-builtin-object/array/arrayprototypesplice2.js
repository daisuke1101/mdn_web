var fruits = ['いちご', 'りんご', 'みかん', 'ぶどう'];
var removed = fruits.splice(2, 0, 'なし');

console.log(fruits);  // (5) ["いちご", "りんご", "なし", "みかん", "ぶどう"](３番目に'なし'が挿入された)
console.log(removed);  // [](除去された要素は「無し」)

removed = fruits.splice(2, 0, 'バナナ', 'すいか');
console.log(fruits);  // (7) ["いちご", "りんご", "バナナ", "すいか", "なし", "みかん", "ぶどう"](３番目から'バナナ'、'すいか'の順に挿入された)
console.log(removed);  // [](除去された要素は「無し」)

removed = fruits.splice(3, 1);
console.log(fruits);  // (6) ["いちご", "りんご", "バナナ", "なし", "みかん", "ぶどう"](４番目の要素が除去された)
console.log(removed);  // ["すいか"]

removed = fruits.splice(2, 1, 'グレープフルーツ');
console.log(fruits);  // (6) ["いちご", "りんご", "グレープフルーツ", "なし", "みかん", "ぶどう"](３番目の要素が除去され、'グレープフルーツ'が挿入された)
console.log(removed);  // ["バナナ"]

removed = fruits.splice(0, 2, 'かき', 'キウイフルーツ', 'すだち');
console.log(fruits);  // (7)["かき", "キウイフルーツ", "すだち", "グレープフルーツ", "なし", "みかん", "ぶどう"](先頭から２つ要素が除去され、'かき'、'キウイフルーツ'、'すだち'が挿入された)
console.log(removed);  // (2)["いちご", "りんご"]

removed = fruits.splice(fruits.length - 3 , 2);
console.log(fruits);  // (5) ["かき", "キウイフルーツ", "すだち", "グレープフルーツ", "ぶどう"]([fruirs.length - 3 = 4]→５番目から２つ要素が除去された)
console.log(removed);  // (2) ["なし", "みかん"]

removed = fruits.splice(-2, 1);
console.log(fruits);  // (4) ["かき", "キウイフルーツ", "すだち", "ぶどう"](最後から２番目の要素が除去された)
console.log(removed);  // ["グレープフルーツ"]

removed = fruits.splice(2);
console.log(fruits);  // (2) ["かき", "キウイフルーツ"](３番目以降の要素が除去された)
console.log(removed);  // (2) ["すだち", "ぶどう"]