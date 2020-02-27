function copy(obj) {
    const copy = Object.create(Object.getPrototypeOf(obj));
    const propNames = Object.getOwnPropertyNames(obj);

    propNames.forEach(function(name) {
        const desc = Object.getOwnPropertyDescriptor(obj, name);
        Object.defineProperty(copy, name, desc);
    });

    return copy;
}

const obj1 = { a: 1, b: 2 };
const obj2 = copy(obj1);

console.log(obj1);  // {a: 1, b: 2}
console.log(obj2);  // {a: 1, b: 2}