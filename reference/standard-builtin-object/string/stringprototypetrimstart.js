const greeting = '   Hello world!   ';

console.log(greeting);  //    Hello world!   

console.log(greeting.trimStart());  // Hello world!   (左側のみ空白が削除された)

console.log(greeting.trimLeft());  // Hello world!   (左側のみ空白が削除された＝trimStart()と同一)