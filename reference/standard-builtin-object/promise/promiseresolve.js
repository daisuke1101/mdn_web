const promise1 = Promise.resolve(123);

promise1.then(function(value) {
    console.log(value);
});
// 123