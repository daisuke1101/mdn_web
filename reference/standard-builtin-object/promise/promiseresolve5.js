var p1 = Promise.resolve({
    then: function(onFulfill, onReject) { onFulfill('Fulfilled');}
});
console.log(p1 instanceof Promise);  // true

p1.then(function(v) {
    console.log(v);  // Fulfilled
}, function(e) {
    // ここは呼ばれません
});

var thenable = {then: function(resolve) {
    throw new TypeError('Throwing');
    resolve('Resolving');
}};

var p2 = Promise.resolve(thenable);
p2.then(function(v) {
    // ここは呼ばれません
}, function(e) {
    console.log(e);  // TypeError: Throwing at Object.then (<anonymous>:13:11)
});

thenable = {then: function(resolve) {
    resolve('Resolving');
    throw new TypeError('Throwing');
}};

var p3 = Promise.resolve(thenable);
p3.then(function(v) {
    console.log(v);  // Resolving
}, function(e) {
    // ここは呼ばれません
});

// Promise {<resolved>: undefined}