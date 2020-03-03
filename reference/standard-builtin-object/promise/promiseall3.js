var p1 = Promise.all([1, 2, 3]);

var p2 = Promise.all([1, 2, 3, Promise.resolve(444)]);

var p3 = Promise.all([1, 2, 3, Promise.reject(555)]);

setTimeout(function() {
    console.log(p1);
    console.log(p2);
    console.log(p3);
});

// Promise {<resolved>: Array(3)}
// Promise {<resolved>: Array(4)}
// Promise {<rejected>: 555}