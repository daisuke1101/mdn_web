var fruits1 = ['いちご', 'ぶどう'];
var fruits2 = ['りんご', 'みかん', 'バナナ', 'なし'];

// 1つ目の配列に2つ目の配列をマージ

Array.prototype.push.apply(fruits1, fruits2);

console.log(fruits1);  // (6) ["いちご", "ぶどう", "りんご", "みかん", "バナナ", "なし"]