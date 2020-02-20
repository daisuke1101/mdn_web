console.log(Array.from('foo'));  // (3) ["f", "o", "o"]

const set = new Set(['foo', 'bar', 'baz', 'foo']);
console.log(Array.from(set));  // (3) ["foo", "bar", "baz"](重複したSet内の要素は削除される)

const map = new Map([[1, 2], [2, 4], [4, 8]]);
console.log(Array.from(map));  // (3) [Array(2), Array(2), Array(2)]0: (2) [1, 2]1: (2) [2, 4]2: (2) [4, 8]length: 3__proto__: Array(0)

const mapper = new Map([['1', 'a'], ['2', 'b']]);
console.log(Array.from(mapper.values()));  // (2) ["a", "b"]
console.log(Array.from(mapper.keys()));  // (2) ["1", "2"]