const event = new Date('July 24, 2020 09:00:00');

event.setSeconds(42);

console.log(event.getSeconds());  // 42

console.log(event);  // Fri Jul 24 2020 09:00:42 GMT+0900 (日本標準時)←ロケールがja-JPの場合