const event = new Date('July 24, 2020 09:00:00 GMT-03:00');

console.log(event.toUTCString());  // Fri, 24 Jul 2020 12:00:00 GMT

console.log(event.getUTCHours());  // 12

event.setUTCHours(23);

console.log(event.toUTCString());  // Fri, 24 Jul 2020 23:00:00 GMT