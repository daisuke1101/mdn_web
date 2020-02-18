var Xmas2020 = new Date('December 25, 2020 23:15:30');
var weekday = Xmas2020.getDay();
var options = { weekday: 'long'};

console.log(new Intl.DateTimeFormat('ja-JP', options).format(Xmas2020));  // 金曜日
console.log(new Intl.DateTimeFormat('en-US', options).format(Xmas2020));  // Friday
console.log(new Intl.DateTimeFormat('de-DE', options).format(Xmas2020));  // Freitag
