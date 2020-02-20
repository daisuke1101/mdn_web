// 連番の生成関数 (Clojure や PHP などでよく "range" と呼ばれる)
const range = (start, stop, step) => Array.from({ length: (stop - start) / step + 1}, (_, i) => start + (i * step));

// 0..4 の範囲の数値を生成
range(0, 4, 1);
// [0, 1, 2, 3, 4]

//  1..10 の範囲の数値を 2 ごとに生成
range(1, 10, 2); 
// [1, 3, 5, 7, 9]

// Array.from を使用して順番通りになるようアルファベットを生成
range('A'.charCodeAt(0), 'Z'.charCodeAt(0), 1).map(x => String.fromCharCode(x));
// ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]