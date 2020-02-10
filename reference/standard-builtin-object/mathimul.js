console.log(Math.imul(2, 4));  // 8

console.log(Math.imul(-1, 8));  // -8

console.log(Math.imul(-2, -2))  // 4

console.log(Math.imul(0xffffffff, 5));  // -5(-1 * 5として扱われる)

console.log(Math.imul(0xfffffffe, 5));  // -10(-2 * 5として扱われる)