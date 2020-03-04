var p1 = new Promise(function(resolve, reject) {
    setTimeout(() => resolve('one'), 500);
});
var p2 = new Promise(function(resolve, reject) {
    setTimeout(() => resolve('two'), 100);
});

Promise.race([p1, p2]).then(function(value) {
    console.log(value);
});
// Promise {<pending>}
// two(p2が先にresolveされた)
// 
var p3 = new Promise(function(resolve, reject) {
    setTimeout(() => resolve('three'), 100);
});
var p4 = new Promise(function(resolve, reject) {
    setTimeout(() => reject(new Error('four')), 500);
});

Promise.race([p3, p4]).then(function(value) {
    console.log(value);
},function(reason) {

});
// three(p3が先にresolveされた)
// 
var p5 = new Promise(function(resolve, rejetr) {
    setTimeout(() => resolve('five'), 500);
});
var p6 = new Promise(function(resolve, reject) {
    setTimeout(() => reject(new Error('six')), 100);
});

Promise.race([p5, p6]).then(function(value) {

}, function(error) {
    console.log(error.message);
});
// six(p6が先にrejectされた)
// 