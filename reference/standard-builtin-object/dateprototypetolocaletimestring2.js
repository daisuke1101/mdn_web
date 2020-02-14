var date = new Date(Date.UTC(2020, 6, 24, 3, 0, 0));

// toLocaleTimeString()メソッドに引数を与えなければ実装に依存し、
// デフォルトのロケールとタイムゾーンを返す
console.log(date.toLocaleTimeString());  // 12:00:00←ロケールがja-JPの場合

