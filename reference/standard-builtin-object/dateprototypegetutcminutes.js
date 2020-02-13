const date1 = new Date('1 January 2020 03:15:30 GMT+07:00');
const date2 = new Date('1 January 2020 03:15:30 GMT+03:30');

console.log(date1.getUTCMinutes());  // 15

console.log(date2.getUTCMinutes());  // 45