const event = new Date(Date.UTC(2011, 02, 11, 5, 46,18.1));

const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

console.log(event.toLocaleDateString('de-DE',options));  // Freitag, 11. März 2011

console.log(event.toLocaleDateString('ar-EG',options));  // الجمعة، ١١ مارس ٢٠١١

console.log(event.toLocaleDateString('ja-JP',options));  // 2011年3月11日金曜日

console.log(event.toLocaleDateString(undefined, options));  // 2011年3月11日金曜日(←デフォルトのロケール設定が反映される)