var p1 = new Promise(function(resolve, reject) {
    resolve('Success');
});

p1.then(function(value) {
    console.log(value);  // Success
    return Promise.reject('Failure');
}).catch(function(e) {
    console.log(e); // Failure
}).then(function() {
    console.log('After a CATCH the chain is RESTORED');
},function() {
    console.log('Not fired due to the CATCH');  // (表示されず)
});
// Promise {<resolved>: undefined}