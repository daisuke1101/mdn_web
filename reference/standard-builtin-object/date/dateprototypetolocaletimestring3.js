var date = new Date(Date.UTC(2020, 6, 24, 3, 0, 0));

// 以下の書式はその地域のタイムゾーンとロケールを想定

// 英語(US)はAM/PM表記の12時間制
console.log(date.toLocaleTimeString('en-US'));  // 12:00:00 PM

// 英語(UK)はAM/PM表記ナシの24時間制
console.log(date.toLocaleTimeString('en-GB'));  // 12:00:00

// 朝鮮(KR)はAM/PM表記の12時間制
console.log(date.toLocaleTimeString('ko-KR'));  // 오후 12:00:00

// 多くのアラビア語圏ではアラビア数字を使用
console.log(date.toLocaleTimeString('ar-EG'));  // ١٢:٠٠:٠٠ م

// サポートされない可能性のある言語が要求された場合
// バリ島・フォールバック言語にインドネシア語
console.log(date.toLocaleTimeString(['ban', 'id']));  // 12.00.00


