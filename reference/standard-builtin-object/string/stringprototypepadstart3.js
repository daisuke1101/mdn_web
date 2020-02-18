function leftFillNum(num, targetLength) {
    return num.toString().padStart(targetLength, 0);
}

const num1 = 123;
const num2 = 456;

console.log(leftFillNum(num1, 5));  // 00123
console.log(leftFillNum(num2, 7));  // 0000456