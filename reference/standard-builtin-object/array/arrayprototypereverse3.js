const a = {0: 1, 1: 2, 2: 3, length: 3};

console.log(a);  // {0: 1, 1: 2, 2: 3, length: 3}

Array.prototype.reverse.call(a);  //apply()でも同様

console.log(a);  // {0: 3, 1: 2, 2: 1, length: 3}