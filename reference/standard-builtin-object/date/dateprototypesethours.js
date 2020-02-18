const event = new Date('July 24, 2020 09:00:00');
event.setHours(10);

console.log(event);  // Fri Jul 24 2020 10:00:00 GMT+0900 (日本標準時)←ロケールがja-JPの場合

event.setHours(20,21,22);

console.log(event);  // Fri Jul 24 2020 20:21:22 GMT+0900 (日本標準時)←ロケールがja-JPの場合
