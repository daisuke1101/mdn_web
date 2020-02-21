function updateFruitsCollection (fruits, fruit) {
    if (fruits.indexOf(fruit) === -1) {
        fruits.push(fruit);
        console.log('新しいfruits collectionは： ' + fruits + 'です。');
    } else if (fruits.indexOf(fruit) > -1) {
        console.log(fruit + 'は、すでにfruits collectionにございます。');
    }
}

var fruits = ['りんご', 'ぶどう', 'いちご', 'みかん', 'バナナ', 'キウイフルーツ', 'すいか', 'なし'];

updateFruitsCollection(fruits, 'かき');  // 新しいfruits collectionは： りんご,ぶどう,いちご,みかん,バナナ,キウイフルーツ,すいか,なし,かきです。

updateFruitsCollection(fruits, 'かき');  // かきは、すでにfruits collectionにございます。