class MyArray {
    static [Symbol.hasInstance](instance) {
        return Array.isArray(instance);
    }
}

console.log([] instanceof MyArray);  // trueを表示