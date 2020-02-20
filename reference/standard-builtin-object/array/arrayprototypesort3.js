var stringArray = ['Red', 'Blue', 'Yellow'];
var numericStringArray = ['80', '9', '700'];
var numberArray = [40, 1, 5, 200];
var mixedNumericArray = ['80', '9', '700', 40, 1, 5, 200];

function compareNumbers(a, b) {
    return a - b;
}

console.log('stringArray：', stringArray.join());  // stringArray： Red,Blue,Yellow
console.log('ソート結果：', stringArray.sort());  // ソート結果： (3) ["Blue", "Red", "Yellow"]

console.log('numberArray：', numberArray.join());  // numberArray： 40,1,5,200
console.log('比較関数なしでのソート結果：', numberArray.sort());  // 比較関数なしでのソート結果： (4) [1, 200, 40, 5]
console.log('compareNumbersでのソート結果：', numberArray.sort(compareNumbers));  // (4) [1, 5, 40, 200]

console.log('numericStringArray：', numericStringArray.join());  // numericStringArray： 80,9,700
console.log('比較関数なしでのソート結果：', numericStringArray.sort());  // 比較関数なしでのソート結果： (3) ["700", "80", "9"]
console.log('compareNumbersでのソート結果：', numericStringArray.sort(compareNumbers));  // compareNumbersでのソート結果： (3) ["9", "80", "700"]

console.log('mixedNumericArray：', mixedNumericArray.join());  // mixedNumericArray： 80,9,700,40,1,5,200
console.log('比較関数なしでのソート結果：', mixedNumericArray.sort());  // 比較関数なしでのソート結果： (7) [1, 200, 40, 5, "700", "80", "9"]
console.log('compareNumbersでのソート結果：', mixedNumericArray.sort(compareNumbers));  // compareNumbersでのソート結果： (7) [1, 5, "9", 40, "80", 200, "700"]