var p1 = new Promise((resolve, reject) => {
    resolve('Success');
    // or
    // reject(new Error('ERROR'));
});

p1.then(value => {
    console.log(value); // Success
}, reason => {
    console.log(reason);  // Error: ERROR
});
// Promise {<resolved>: undefined}