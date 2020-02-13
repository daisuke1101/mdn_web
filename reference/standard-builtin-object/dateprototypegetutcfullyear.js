const date1 = new Date('July 24, 2020, 09:00:00 GMT+11:00');
const date2 = new Date('July 24, 2020, 09:00:00 GMT-11:00');

console.log(date1.getUTCFullYear());  // 2020

console.log(date2.getUTCFullYear());  // 2020