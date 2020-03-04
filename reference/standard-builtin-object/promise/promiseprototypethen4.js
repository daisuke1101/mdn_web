Promise.resolve('foo')
// 1:
.then((string) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            string += 'bar';
            resolve(string);
        }, 1);
    });
})
// 2:
.then((string) => {
    setTimeout(() => {
        string += 'baz';
        console.log(string);
    }, 1);
    return string;
})
// 3:
.then((string) => {
    console.log('Last Then:  oops... didn\'t bother to instantiate and return ' + 'a promise in the prior then so the sequence may be a bit ' + 'surprising');
    console.log(string);
})

// Promise {<pending>}
// Last Then:  oops... didn't bother to instantiate and return a promise in the prior then so the sequence may be a bit surprising(3)
// foobar(1)
// foobarbaz(2)