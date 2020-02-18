const event = new Date('05 October, 2011 14:48 UTC');
console.log(event.toString());  // Wed Oct 05 2011 23:48:00 GMT+0900 (日本標準時)←ロケールがja-JPの場合

console.log(event.toISOString());  // 2011-10-05T14:48:00.000Z