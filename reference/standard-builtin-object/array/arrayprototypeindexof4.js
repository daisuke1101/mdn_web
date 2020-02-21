function updateFruitsCollection (fruits, fruit) {
    if (fruits.indexOf(fruit) === -1) {
        fruits.push(fruit);
        console.log('New fruits collection is : ' + fruits);
    } else if (fruits.indexOf(fruit) > -1) {
        console.log(fruit + ' already exists in the fruits collection.');
    }
}

var fruits = ['りんご', 'ぶどう', 'いちご', 'みかん', 'バナナ', 'キウイフルーツ', 'すいか', 'なし'];

updateFruitsCollection(fruits, 'かき');  // New fruits collection is : りんご,ぶどう,いちご,みかん,バナナ,キウイフルーツ,すいか,なし,かき

updateFruitsCollection(fruits, 'かき');  // かき already exists in the fruits collection.