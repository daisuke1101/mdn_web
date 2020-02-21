const fruits = ['いちご', 'りんご', 'バナナ', 'ぶどう', 'みかん', 'りんご'];

console.log(fruits.indexOf('りんご'));  // 1

console.log(fruits.indexOf('りんご', 2));  // 5(３番目から検索開始)

console.log(fruits.indexOf('メロン'));  // -1(見つからなかった場合は-1を返す)