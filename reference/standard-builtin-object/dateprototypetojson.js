const event = new Date('August 19, 2020 23:15:30 UTC');

const jsonDate = event.toJSON();

console.log(jsonDate);  // 2020-08-19T23:15:30.000Z

console.log(new Date(jsonDate).toUTCString());  // Wed, 19 Aug 2020 23:15:30 GMT