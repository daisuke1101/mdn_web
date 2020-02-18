const iterable1 = new Object();

iterable1[Symbol.iterator] = function* () {
    yield 1;
    yield 2;
    yield 3;
};

console.log([...iterable1]);  //(3) [1, 2, 3]を表示