var date = new Date(Date.UTC(2020, 06, 24, 9, 0, 0));

// 以下の書式はその地域のタイムゾーンとロケールを想定
// USA/LAの場合

// 英語(USA)は月-日-年の順
console.log(date.toLocaleDateString('en-US'));  // 7/24/2020

// 英語(UK)は日-月-年の順
console.log(date.toLocaleDateString('en-GB'));  // 24/07/2020

// 朝鮮(KR)は年-月-年の順
console.log(date.toLocaleDateString('ko-KR'));  // 2020. 7. 24.

// ペルシャ語の場合、手動でペルシャ暦に変換することは難しい
console.log(date.toLocaleDateString('fa-IR'));  // ۱۳۹۹/۵/۳

// 多くのアラビア語圏ではアラビア数字
console.log(date.toLocaleDateString('ar-EG'));  // ٢٤‏/٧‏/٢٠٢٠

// 日本では和暦を用いる場合多い
console.log(date.toLocaleDateString('ja-JP-u-ca-japanese'));  // R2/7/24

// サポートされない可能性のある言語を要求した場合
// バリ島とし、フォールバック言語にインドネシア語
console.log(date.toLocaleDateString(['ban', 'id']));  // 24/7/2020