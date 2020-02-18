const event = new Date('July 24, 2020 09:00:00');

console.log(event.getMilliseconds());  // 0

event.setMilliseconds(456);

console.log(event.getMilliseconds());  // 456