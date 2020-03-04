var foreverPendingPromise = Promise.race([]);
var alreadyResolvedPromise = Promise.resolve(666);

var arr = [foreverPendingPromise, alreadyResolvedPromise, 'NON-PROMISE value'];
var arr2 = [foreverPendingPromise, 'NON-PROMISE value', Promise.resolve(666)];
var p = Promise.race(arr);
var p2 = Promise.race(arr2);

console.log(p);
console.log(p2);

setTimeout(function() {
    console.log('The Stack is NOW EMPTY');
    console.log(p);
    console.log(p2);
});
// Promise {<pending>}
// Promise {<pending>}
// 
// The Stack is NOW EMPTY
// Promise {<resolved>: 666}
// Promise {<resolved>: "NON-PROMISE value"}