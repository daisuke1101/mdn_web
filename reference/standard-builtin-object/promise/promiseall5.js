var p = Promise.all([]);
var p2 = Promise.all([1337], 'Hi');
console.log(p);
console.log(p2);
// Promise {<resolved>: Array(0)}
// Promise {<pending>}

setTimeout (function() {
    console.log('The Stack is NOW EMPTY');
    console.log(p2);
});
// The Stack is NOW EMPTY
// Promise {<resolved>: Array(1)}