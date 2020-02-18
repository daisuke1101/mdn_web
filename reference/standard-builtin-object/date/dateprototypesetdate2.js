var theBigDay = new Date(1970, 7, 22);  // 1970-07-22

console.log(theBigDay.setDate(24));  // 1970-07-24
console.log(theBigDay.setDate(32));  // 1970-08-01
console.log(theBigDay.setDate(20));  // 1970-07-20
console.log(theBigDay.setDate(0));  // 1970-07-31
console.log(theBigDay.setDate(98));  // 1970-10-06
console.log(theBigDay.setDate(-50));  // 1970-08-11