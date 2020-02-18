const date1 = new Date('December 25, 2019 12:00:00');

const date2 = new Date('2019-12-25T12:00:00');

console.log(date1 === date2);  // false

console.log(date1 - date2);  // 0
