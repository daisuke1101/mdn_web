var p1 = Promise.resolve('calling next');

var p2 = p1.catch(function(reason) {
    // 呼び出されず
    console.log('catch p1');
    console.log(reason);
});

p2.then(function(value) {
    console.log('next promise\'s onFulfilled');  // next promise's onFulfilled
    console.log(value);  // calling next
}, function(reason) {
    console.log('next promise\'s onRejected');  // (呼び出されず)
    console.log(reason);  // (呼び出されず)
});
// Promise {<resolved>: undefined}