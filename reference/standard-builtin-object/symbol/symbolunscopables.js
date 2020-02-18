var keys = [];

with(Array.prototype) {
  keys.push("something");
}

Object.keys(Array.prototype[Symbol.unscopables]); 
// ["copyWithin", "entries", "fill", "find", "findIndex", 
//  "includes", "keys", "values"]