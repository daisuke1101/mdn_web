var x = [1, 2, 3];

var fakeArray = {
    [Symbol.isConcatSpreadable]: true,
    length: 2,
    0: 'Bon jour',
    1: 'le mond'
}

console.log(x.concat(fakeArray));  //  [1, 2, 3, "Bon jour", "le mond"]を表示