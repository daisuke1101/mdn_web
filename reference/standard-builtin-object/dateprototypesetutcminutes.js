const date1 = new Date('December 31, 2020 23:15:30 GMT+11:00');

console.log(date1.getUTCMinutes());  // 15

date1.setUTCMinutes(25);

console.log(date1.getUTCMinutes());  // 25

console.log(date1.toUTCString());  // Thu, 31 Dec 2020 12:25:30 GMT
