const event = new Date('December 31, 2020 23:15:30 GMT-03:00');

console.log(event.toUTCString());  // Fri, 01 Jan 2021 02:15:30 GMT


console.log(event.getUTCMonth());  // 0

event.setUTCMonth(11);  // 

console.log(event.toUTCString());  // Wed, 01 Dec 2021 02:15:30 GMT