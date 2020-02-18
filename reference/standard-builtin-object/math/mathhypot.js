console.log(Math.hypot(3, 4)); // 5

console.log(Math.hypot(3, 4, 5));  // 7.0710678118654755

console.log(Math.hypot());  // 0

console.log(Math.hypot(NaN));  // NaN

console.log(Math.hypot(3, 4, 'foo'));  // NaN(数値に変換できない文字列が含まれているため)

console.log(Math.hypot(3, 4, '5'));  // 7.0710678118654755(数値に変換できる文字列は変換される)

console.log(Math.hypot(-3));  // 3(abs(-3)と同値)