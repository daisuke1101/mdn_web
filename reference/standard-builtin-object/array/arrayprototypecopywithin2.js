console.log([1, 2, 3, 4, 5].copyWithin(-2));  // (5) [1, 2, 3, 1, 2]

console.log([1, 2, 3, 4, 5].copyWithin(0, 3));  // (5) [4, 5, 3, 4, 5]

console.log([1, 2, 3, 4, 5].copyWithin(0, 3, 4));  // (5) [4, 2, 3, 4, 5]

console.log([1, 2, 3, 4, 5].copyWithin(0, -2, -1));  // (5) [4, 2, 3, 4, 5]

console.log([].copyWithin.call({length: 5, 3: 1}, 0, 3));
// {0: 1, 3: 1, length: 5}

// ES2015 Typed Arrays are subclasses of Array
var i32a = new Int32Array([1, 2, 3, 4, 5]);

console.log(i32a.copyWithin(0, 2));
// Int32Array [3, 4, 5, 4, 5]

// On platforms that are not yet ES2015 compliant: 
console.log([].copyWithin.call(new Int32Array([1, 2, 3, 4, 5]), 0, 3, 4));
// Int32Array [4, 2, 3, 4, 5]