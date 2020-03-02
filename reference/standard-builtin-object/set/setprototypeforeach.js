function logSetElements(value1, value2, set) {
    console.log('s[' + value1 + '] = ' + value2);
}

console.log(new Set(['foo', 'bar',undefined]).forEach(logSetElements));
// s[foo] = foo
// s[bar] = bar
// s[undefined] = undefined