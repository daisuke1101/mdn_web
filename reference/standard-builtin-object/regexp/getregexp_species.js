class MyRegExp extends RegExp {
    // MyRegExp speciesでRegExpを上書き
    static get [Symbol.species]() {
        return RegExp;
    }
}

const regex1 = new MyRegExp('foo', 'g');

console.log(regex1.test('football'));  // true