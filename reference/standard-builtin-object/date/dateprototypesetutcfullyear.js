const event = new Date('December 31, 2020 23:15:30 GMT-03:00');

console.log(event.getUTCFullYear());  // 2021

console.log(event.toUTCString());  // Fri, 01 Jan 2021 02:15:30 GMT


event.setUTCFullYear(1975);

console.log(event.toUTCString());  // Wed, 01 Jan 1975 02:15:30 GMT