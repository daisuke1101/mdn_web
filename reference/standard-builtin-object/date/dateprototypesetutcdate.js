const event = new Date('July 24, 2020 09:00:00 GMT-3:00');

console.log(event.getUTCDate());  // 24

event.setUTCDate(19);

console.log(event.getUTCDate());  // 19