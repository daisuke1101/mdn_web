const event = new Date(Date.UTC(2020, 07, 24, 9, 0, 0));

// 英語(UK)では、日-月-年の順、時刻は24時間表記
console.log(event.toLocaleString('en-GB', { timeZone: 'UTC' }));  // 24/08/2020, 09:00:00

// 朝鮮(KR)では、年-月-日の順、時刻は12時間表記で午前・午後あり
console.log(event.toLocaleString('ko-KR', { timeZone: 'UTC' }));  // 2020. 8. 24. 오전 9:00:00

// 日本の場合
console.log(event.toLocaleString('ja-JP-u-ca-japanese', { timeZone: 'UTC' }));  // R2/8/24 9:00:00