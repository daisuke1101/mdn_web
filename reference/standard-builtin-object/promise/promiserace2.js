var resolvedPrmisesArray = [Promise.resolve(33), Promise.resolve(44)];

var p = Promise.race(resolvedPrmisesArray);

console.log(p);

setTimeout(function() {
    console.log('The Stack is NOW EMPTY');
    console.log(p);
});

// Promise {<pending>}
// 
// The Stack is NOW EMPTY
// Promise {<resolved>: 33}
