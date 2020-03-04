Promise.resolve().then(() => {
    throw new Error('ERROR');
}).then(() => {
    console.log('NOT called');
}, error => {
    console.error('onRejected function called: ' + error.message);
});
// onRejected function called: ERROR
// Promise {<resolved>: undefined}