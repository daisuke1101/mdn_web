function logArrayElements(element, index, array) {
    console.log('a[' + index + '] = ' + element);
}

new Uint8Array([0, 1, 2, 3]).forEach(logArrayElements);
// a[0] = 0
// a[1] = 1
// a[2] = 2
// a[3] = 3