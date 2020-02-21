var a = ['a', 'b', 'c'];
var iterator = a.entries()

for (let e of iterator) {
    console.log(e);
}
// (2) [0, "a"]
// (2) [1, "b"]
// (2) [2, "c"]