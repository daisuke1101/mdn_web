function minOfArray(arr) {
    var min = Infinity;
    var QUANTUM = 32768;  // 配列分割用

    for (var i = 0, len = arr.length; i < len; i += QUANTUM) {
        var submin = Math.min.apply(null,arr.slice(i, Math.min(i+QUANTUM, len)));
        min = Math.min(submin, min);
    }

    return min;
}

var min = minOfArray([5, 6, 2, 3, 7]);

console.log(min);