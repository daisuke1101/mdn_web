const event = new Date('July 23, 2020 09:00:00');

event.setDate(24);
console.log(event.getDate());  // 24

event.setDate(32);
console.log(event.getDate());  // 1(設定可能な日付から超過した分を表示)