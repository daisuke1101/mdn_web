Promise.resolve().then(() => {
    throw new Error('FAILED');
}).catch(error => {
    console.error('onRejected function called: ' + error.message);
}).then(() => {
    console.log('I am always called even if the prior then\'s promise rejects');
});

// VM1599:4 onRejected function called: FAILED
// I am always called even if the prior then's promise rejects
// Promise {<resolved>: undefined}