var number = 123456.789;

// ドイツの場合
console.log(number.toLocaleString('de-DE'));

// アラブの場合
console.log(number.toLocaleString('ar-EG'));

// インド英語の場合(10万は1lakh、1000万=100lakhは1croreとなるため、そのためのカンマ区切り)
console.log(number.toLocaleString('en-IN'));

// 中国の場合
console.log(number.toLocaleString('zh-Hans-CN-u-nu-hanidec'));

// バリ島(インドネシア)の場合
console.log(number.toLocaleString(['ban', 'id']));  // バリ語(インドネシア・バリ島でよく見られる)
