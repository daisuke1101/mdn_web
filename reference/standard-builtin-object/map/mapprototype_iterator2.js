var myMap = new Map();

myMap.set('0', 'foo')
    .set(1, 'bar')
    .set({}, 'baz');

for (var v of myMap) {
    console.log(v);
}

// (2) ["0", "foo"]
// (2) [1, "bar"]
// (2) [{…}, "baz"]