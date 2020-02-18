// 最小値・最大値を求めたい配列
var numbers = [5, 6, 2, 3, 7];

// Math.min/Math.max と apply を使う
var max = Math.max.apply(null, numbers);

var min = Math.min.apply(null, numbers);

// ループ分を使うとこうなる
max = -Infinity, min = +Infinity;

for (var i = 0 ; i < numbers.length; i++) {
    if (numbers[i] > max) {
        max = numbers[i];
    }
    if (numbers[i] < min) {
        min = numbers[i];
    }
}