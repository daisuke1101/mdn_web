function resolved(result) {
    console.log('Resolved');
}

function rejected(result) {
    console.error(result);
}

Promise.reject(new Error('fail')).then(resolved, rejected);
// Error: fail
// Promise {<resolved>: undefined}