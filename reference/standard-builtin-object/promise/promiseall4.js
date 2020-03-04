var resolvedPromiseArray = [Promise.resolve(33), Promise.resolve(44)];

var p = Promise.all(resolvedPromiseArray);

console.log(p);
// Promise {<pending>}
// 

setTimeout(function() {
    console.log('The Stack is now EMPTY');
    console.log(p);
});
// The Stack is now EMPTY
// Promise {<resolved>: Array(2)}