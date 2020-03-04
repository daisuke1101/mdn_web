var p1 = new Promise((resolve, reject) => {
    setTimeout(() => resolve('p1_delayed_resolvement'), 1000);
});

var p2 = new Promise((resolve, reject) => {
    reject(new Error('p2_immediate_rejection'));
});

Promise.all([
    p1.catch(error => {return error}),
    p2.catch(error => {return error}),
]).then(values => {
    console.log(values[0]);  // 
    console.log(values[1]);  // 
})

// Promise {<pending>}
// Error: p2_immediate_rejection
//     at <anonymous>:6:12
//     at new Promise (<anonymous>)
//     at <anonymous>:5:10