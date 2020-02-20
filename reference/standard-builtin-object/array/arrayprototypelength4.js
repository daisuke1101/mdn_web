var numbers = [1, 2, 3, 4, 5];

if(numbers.length > 3) {
    numbers.length = 3;
}

console.log(numbers);  // (3) [1, 2, 3](numbers配列・4番目以降が削除された)
console.log(numbers.length);  // 3