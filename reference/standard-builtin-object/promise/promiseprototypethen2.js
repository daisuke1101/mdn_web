const resolvedPromise = Promise.resolve(33);

let thenPromise = resolvedPromise.then((value) => {
    console.log("this gets called after the end of the main stack. the value received and returned is: " + value);
    return value;
});

console.log(thenPromise);

setTimeout(() => {
    console.log(thenPromise);
});

// Promise {<pending>}
// this gets called after the end of the main stack. the value received and returned is: 33
//
// Promise {<resolved>: 33}
//
//
