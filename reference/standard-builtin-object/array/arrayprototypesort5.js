// マップでソートする場合
var list = ['Delta', 'alpha', 'CHARLES', 'bravo'];

var mapped = list.map(function(el, i) {
    return { index: i, value: el.toLowerCase() };
})

mapped.sort(function(a, b) {
    if (a.value > b.value) {
        return 1;
    }
    if (a.value < b.value) {
        return -1;
    }
    return 0;
});

var result = mapped.map(function(el) {
    return list[el.index];
});

console.log(result);  // (4) ["alpha", "bravo", "CHARLES", "Delta"]