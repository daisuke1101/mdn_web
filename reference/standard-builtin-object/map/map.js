var  myMap = new Map();

var keyString = "文字列", keyObj = {}, keyFunc = function() {};

myMap.set(keyString, "'文字列'と関連付けられた値");
myMap.set(keyObj, "keyObjと関連付けられた値");
myMap.set(keyFunc, "keyFuncと関連付けられた値");

console.log(myMap.size);  // 3

console.log(myMap.get(keyString));  // '文字列'と関連付けられた値
console.log(myMap.get(keyObj));  // keyObjと関連付けられた値
console.log(myMap.get(keyFunc));  // keyFuncと関連付けられた値

console.log(myMap.get("文字列"));  // '文字列'と関連付けられた値(keyString === "文字列"であるため)
console.log(myMap.get({}));  // undefined(keyObj !== {}であるため)
console.log(myMap.get(function() {}));  // undefined(keyFunc !== function() {}であるため)