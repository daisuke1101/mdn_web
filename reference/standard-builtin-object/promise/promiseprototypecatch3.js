var p1 = new Promise(function(resolve, reject) {
    throw new Error('Failure');
});

p1.catch(function(e) {
    console.log(e);  // Error: Failure
});
//     at <anonymous>:2:11
//     at new Promise (<anonymous>)
//     at <anonymous>:1:10

var p2 = new Promise(function(resolve, reject) {
    setTimeout(() => {
        throw new Error('Uncaught Exception');
    }, 1000);  // Uncaught Error: Uncaught Exception at <anonymous>:11:15
});

p2.catch(function(e) {
    console.log(e);  // 呼び出されず
});

var p3 = new Promise(function(resolve, reject) {
    resolve();
    throw new Error('Slienced Exception');
});

p3.catch(function(e) {
    console.log(e);  // 呼び出されず
});