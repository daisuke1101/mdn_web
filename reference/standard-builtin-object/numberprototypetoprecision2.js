var num = 5.123456;

console.log(num.toPrecision());  // 5.123456
console.log(num.toPrecision(5));  // 5.1235
console.log(num.toPrecision(2));  // 5.1
console.log(num.toPrecision(1));  // 5

numObj = 0.000123;

console.log(numObj.toPrecision());  // 0.000123
console.log(numObj.toPrecision(5));  // 0.00012300
console.log(numObj.toPrecision(2));  // 0.00012
console.log(numObj.toPrecision(1));  // 0.0001

// 指数表記される場合
console.log((1234.5).toPrecision(2));  // 1.2e+3