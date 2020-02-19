const greeting = '   Hello world!   ';

console.log(greeting);  //    Hello world!   

console.log(greeting.trimEnd());  //    Hello world!(右側のみ空白が削除された)


console.log(greeting.trimRight());  //    Hello world!(trimEnd()と同一)