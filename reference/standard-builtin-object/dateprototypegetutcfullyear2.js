const date1 = new Date('December 31, 2020, 23:15:30 GMT+11:00');
const date2 = new Date('December 31, 2020, 23:15:30 GMT-11:00');

console.log(date1.getUTCFullYear());  // 2020

console.log(date2.getUTCFullYear());  // 2021