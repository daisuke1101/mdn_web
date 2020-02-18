var hello = 'こんにちは、';
console.log(hello.concat('鈴木さん', '。よい1日を。'));  // こんにちは、鈴木さん。よい1日を。

var greetList = ['こんにちは', ' ', '佐藤さん', '!'];
console.log("".concat(...greetList));  // こんにちは 佐藤さん!
console.log("".concat({}));  // [object Object]
console.log("".concat([]));  // 
console.log("".concat(null));  // null
console.log("".concat(true));  // true
console.log("".concat(4, 5));  // 45
