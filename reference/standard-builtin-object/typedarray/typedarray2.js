var int16 = new Int16Array(2);
int16[0] = 42;
console.log(int16[0]);  // 42

Int8Array.prototype[20] = 'foo';
console.log((new Int8Array(32))[20]);  // 0

Int8Array.prototype[20] = 'foo';
console.log((new Int8Array(8))[20]);  // undefined

Int8Array.prototype[-1] = 'foo';
console.log((new Int8Array(8))[-1]);  // undefined

Int8Array.prototype.foo = 'bar';
console.log((new Int8Array(32)).foo);  // bar