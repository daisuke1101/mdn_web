var foreverPendingPromise = Promise.race([]);
console.log(foreverPendingPromise);
setTimeout(function() {
    console.log('The Stack is NOW EMPTY');
    console.log(foreverPendingPromise);
});
// Promise {<pending>}
// 
// The Stack is NOW EMPTY
// Promise {<pending>}