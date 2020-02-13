const date1 = new Date('July 24, 2020 09:00:00 GMT+07:00');
const date2 = new Date('July 24, 2020 09:00:00 GMT-02:00');

console.log(date1.getTimezoneOffset());  // -540

console.log(date2.getTimezoneOffset());  // -540

console.log(date1.getTimezoneOffset() === date2.getTimezoneOffset());  // true