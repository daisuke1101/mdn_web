const event1 = new Date('June 1, 1984');  // KDDI創業日
const event2 = new Date();
event2.setTime(event1.getTime());

console.log(event1);  // Fri Jun 01 1984 00:00:00 GMT+0900 (日本標準時)←ロケールがja-JPの場合

console.log(event2);  // Fri Jun 01 1984 00:00:00 GMT+0900 (日本標準時)←ロケールがja-JPの場合