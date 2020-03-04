function resolveLater(resolve, reject) {
    setTimeout(() => {
        resolve(10);
    }, 1000);
}
function rejectLater(resolve, reject) {
    setTimeout(() => {
        reject(new Error('ERROR'));
    }, 1000);
}

var p1 = Promise.resolve('foo');
var p2 = p1.then(() => {
    // Return promise here, that will be resolved to 10 after 1 second
    return new Promise(resolveLater);
});
p2.then((v) => {
    console.log('resolved', v);  // resolved 10
}, (e) => {
    // not called
    console.log('rejected', e);  //
});

var p3 = p1.then(() => {
    // Return promise here, that will be rejected with 'Error' after 1 second
    return new Promise(rejectLater);
});
p3.then((v) => {
    // not called
    console.log('resolved', v);
}, (e) => {
    console.log('rejected', e);  // rejected Error: ERROR
});

// Promise {<pending>}
// resolved 10
// rejected Error: ERROR
//     at <anonymous>:8:16