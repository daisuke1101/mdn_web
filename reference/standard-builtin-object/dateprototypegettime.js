// 日付copy
// monthは0を基点とするため、1995/1/10にするには
var birthday = new Date(1994, 12, 10);
var copy = new Date();
copy.setTime(birthday.getTime());