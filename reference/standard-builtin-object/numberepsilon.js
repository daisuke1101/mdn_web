const result = Math.abs(0.2 - 0.3 + 0.1);

console.log(result);  // 2.7755575615628914e-17

console.log(result < Number.EPSILON);  // true