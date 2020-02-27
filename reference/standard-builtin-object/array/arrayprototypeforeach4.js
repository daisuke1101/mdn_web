function logArrayElements(element, index, array) {
    console.log('a[' + index + '] = ' + element);
}

[2, 5, , 9].forEach(logArrayElements);

// a[0] = 2
// a[1] = 5
// a[3] = 9(空のa[2]はスキップされています)