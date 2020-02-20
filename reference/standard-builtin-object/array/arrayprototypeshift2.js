var myFish = ['angel', 'clown', 'mandarin', 'surgeon'];

console.log('myFish before:：', JSON.stringify(myFish));  // myFish before:： ["angel","clown","mandarin","surgeon"]

var shifted = myFish.shift();

console.log('myFish After：', myFish);  // (3) ["clown", "mandarin", "surgeon"]
console.log('除去した要素：', shifted);  // 除去した要素： angel