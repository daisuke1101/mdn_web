console.log(JSON.stringify({}));  // {}
console.log(JSON.stringify(true));  // true
console.log(JSON.stringify('foo'));  // "foo"
console.log(JSON.stringify([1, 'false', false]));  // [1,"false",false]
console.log(JSON.stringify([NaN, null, Infinity]));  // [null,null,null]
console.log(JSON.stringify({x: 5}));  // {"x":5}

console.log(JSON.stringify(new Date(2020, 6, 24, 15, 4, 5)));  // "2020-07-24T06:04:05.000Z"

console.log(JSON.stringify({x: 5, y: 6}));  // {"x":5,"y":6}

console.log(JSON.stringify([new Number(3), new String('false'), new Boolean(false)]));  // [3,"false",false]

// 文字列がキーとなった配列要素は列挙可能ではなく、 JSON では意味をなさない
var a = ['foo', 'bar'];
a['baz'] = 'quux';  // 無視される
console.log(JSON.stringify(a));  // ["foo","bar"]

console.log(JSON.stringify({x: [10, undefined, function(){}, Symbol('')]}));  // {"x":[10,null,null,null]}

// Set,Map
console.log(JSON.stringify([new Set([1]), new Map([[1, 2]]), new WeakSet([{a: 1}]), new WeakMap([[{a: 1}, 2]])]));  // [{},{},{},{}]

// TypedArray
console.log(JSON.stringify([new Int8Array([1]), new Int16Array([1]), new Int32Array([1])]));  // [{"0":1},{"0":1},{"0":1}]
console.log(JSON.stringify([new Uint8Array([1]), new Uint8ClampedArray([1]), new Uint16Array([1]), new Uint32Array([1])]));  // [{"0":1},{"0":1},{"0":1},{"0":1}]
console.log(JSON.stringify([new Float32Array([1]), new Float64Array([1])]));  // [{"0":1},{"0":1}]

// toJSON()
console.log(JSON.stringify({x: 5, y: 6, toJSON(){return this.x + this.y;}}));  // 11

// Symbol
console.log(JSON.stringify({x: undefined, y: Object, z: Symbol('')}));  // {}
console.log(JSON.stringify({[Symbol('foo')]: 'foo'}));  // {}
console.log(JSON.stringify({[Symbol.for('foo')]: 'foo'}, [Symbol.for('foo')]));  // {}
console.log(JSON.stringify({[Symbol.for('foo')]: 'foo'}, function(k, v) {
    if(typeof k === 'symbol') {
        return 'a symbol';
    }
}));  //undefined


console.log(JSON.stringify(Object.create(null, {x: {value: 'x', enumerable: false}, y: {value: 'y', enumerable: true}})));  // {"y":"y"}


console.log(JSON.stringify({x: 2n}));  // Uncaught TypeError: Do not know how to serialize a BigInt