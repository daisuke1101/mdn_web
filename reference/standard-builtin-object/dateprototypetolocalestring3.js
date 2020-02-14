var date = new Date(Date.UTC(2020, 6, 24, 3, 0, 0));

// 以下の書式はその地域のタイムゾーンとロケールを想定
// USA/LA

// 英語(US)は月-日-年の順でAM/PM表記の12時間制
console.log(date.toLocaleString('en-US'));  // 7/24/2020, 12:00:00 PM

// 英語(UK)は日-月-年の順でAM/PM表記ナシの24時間制
console.log(date.toLocaleString('en-GB'));  // 24/07/2020, 12:00:00

// 朝鮮(KR)は年-月-日の順でAM/PM表記の12時間制
console.log(date.toLocaleString('ko-KR'));  // 2020. 7. 24. 오후 12:00:00

// 多くのアラビア語圏ではアラビア数字を使用
console.log(date.toLocaleString('ar-EG'));  // ٢٤‏/٧‏/٢٠٢٠ ١٢:٠٠:٠٠ م

// 日本では和暦を用いることが多い
console.log(date.toLocaleString('ja-JP-u-ca-japanese'));  // R2/7/24 12:00:00

// サポートされない可能性のある言語が要求された場合
// バリ島・フォールバック言語にインドネシア語
console.log(date.toLocaleString(['ban', 'id']));  // 24/7/2020 12.00.00
