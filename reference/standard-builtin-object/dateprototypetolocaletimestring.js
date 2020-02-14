// タイムゾーンに依存
const event = new Date('July 24, 2020 23:15:30 GMT+00:00');

console.log(event.toLocaleTimeString('en-US'));  // 8:15:30 AM

console.log(event.toLocaleTimeString('it-IT'));  // 08:15:30

console.log(event.toLocaleTimeString('ar-EG'));  // ٨:١٥:٣٠ ص

console.log(event.toLocaleTimeString('ja-JP'));  // 8:15:30

console.log(event.toLocaleTimeString('ko-KR'));  // 오전 8:15:30
