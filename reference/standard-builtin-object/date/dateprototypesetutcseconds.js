const date1 = new Date('December 31, 2020 23:15:30 GMT+11:00');

console.log(date1.getUTCSeconds());  // 30

date1.setUTCSeconds(39);

console.log(date1.getUTCSeconds());  // 39

console.log(date1.toUTCString());  // Thu, 31 Dec 2020 12:15:39 GMT