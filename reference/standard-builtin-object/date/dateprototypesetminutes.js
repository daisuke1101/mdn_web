const event = new Date('July 24, 2020 09:00:00');

event.setMinutes(45);

console.log(event.getMinutes());  // 45

console.log(event);  // Fri Jul 24 2020 09:45:00 GMT+0900 (日本標準時)←ロケールがja-JPの場合