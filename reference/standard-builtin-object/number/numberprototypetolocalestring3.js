var number = 123456.789;

// ドイツ・ユーロを用いる場合
console.log(number.toLocaleString('de-DE', {style: 'currency', currency: 'EUR'}));

// 日本円を用いる場合
console.log(number.toLocaleString('ja-JP', {style: 'currency', currency: 'JPY'}));

// インド英語・1000の位で切り捨て
console.log(number.toLocaleString('en-IN', {maximumSignificantDigits: 3}));

// 使用しているブラウザのデフォルトロケールで、数字表記を設定した場合
var num = 30000.65;
console.log(num.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2}));