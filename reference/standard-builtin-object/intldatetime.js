const date = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));

// アメリカの場合
console.log(new Intl.DateTimeFormat('en-US').format(date));

// 連合王国の場合
console.log(new Intl.DateTimeFormat('en-GB').format(date));

// インドネシアの場合
console.log(new Intl.DateTimeFormat(['ban', 'id']).format(date));

// 日本の場合
console.log(new Intl.DateTimeFormat('ja-JP').format(date));

// 日本の場合(元号仕様)
console.log(new Intl.DateTimeFormat('ja-JP-u-ca-japanese').format(date));

// 中国台湾省の場合
console.log(new Intl.DateTimeFormat('zh-TW-u-ca-roc').format(date));

// 中国の場合(支那暦仕様、甲子を元年とした干支法)
console.log(new Intl.DateTimeFormat('zh-CN-u-ca-chinese').format(date));


