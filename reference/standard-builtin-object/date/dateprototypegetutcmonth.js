const date1 = new Date('December 31, 2020 23:15:30 GMT+11:00');
const date2 = new Date('December 31, 2020 23:15:30 GMT-11:00');

console.log(date1.getUTCMonth());  // 11(12月)

console.log(date2.getUTCMonth());  // 0(1月)