function logMapElements(value, key, map) {
    console.log(`m[${key}] = ${value}`);
}

new Map([['foo', 3], ['bar', {}], ['baz', undefined]]).forEach(logMapElements);

// m[foo] = 3
// m[bar] = [object Object]
// m[baz] = undefined