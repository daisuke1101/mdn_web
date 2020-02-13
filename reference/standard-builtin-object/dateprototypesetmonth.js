const event = new Date('July 24, 2020 09:00:00');

event.setMonth(7);

console.log(event.getMonth());  // 7

console.log(event);  // Mon Aug 24 2020 09:00:00 GMT+0900 (日本標準時)←ロケールがja-JPの場合