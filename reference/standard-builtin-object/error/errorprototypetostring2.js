var e = new Error('fatal error');
console.log(e.toString()); // 'Error: fatal error'

e.name = undefined;
console.log(e.toString()); // 'Error: fatal error'

e.name = '';
console.log(e.toString()); // 'fatal error'

e.message = undefined;
console.log(e.toString()); // 'Error'

e.name = 'hello';
console.log(e.toString()); // 'hello'