const numObj = new Number(42);
console.log(typeof numObj);  // object

const num = numObj.valueOf();
console.log(num);  // 42

console.log(typeof num);  // number