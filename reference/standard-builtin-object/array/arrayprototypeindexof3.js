var indices = [];
var array = ['a', 'b', 'a', 'c', 'a', 'd'];
var element = 'a';
var idx = array.indexOf(element);

while (idx != -1) {
    indices.push(idx);
    idx = array.indexOf(element, idx + 1);  // (idxは0から始まるため)
}

console.log(indices);  // [0, 2, 4]