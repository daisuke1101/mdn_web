var date = new Date(Date.UTC(2020, 6, 24, 9, 0, 0));

// toLocaleString()メソッドに引数を与えなければ実装に依存し、
// デフォルトのロケールとタイムゾーンを返す
console.log(date.toLocaleString());
// 2020/7/24 18:00:00←ロケールがja-JPの場合

