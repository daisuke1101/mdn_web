// this
const x = Error('I was createde using a function call');
// has the same functionality as this:
const y = new Error('I was constructed via the "new" keyword');

console.log(x);  // Error: I was createde using a function call at <anonymous>:2:11
console.log(y);  // Error: I was constructed via the "new" keyword at <anonymous>:4:11