const date1 = new Date('2018-01-24T12:38:29.069Z');

console.log(date1.getUTCMilliseconds());  // 069

date1.setUTCMilliseconds(420);

console.log(date1.getUTCMilliseconds());  // 420

console.log(date1.toUTCString());  // Wed, 24 Jan 2018 12:38:29 GMT