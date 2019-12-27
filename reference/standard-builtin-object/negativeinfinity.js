function checkNumber(smallNumber) {
  if(smallNumber === Number.NEGATIVE_INFINITY) {
    return 'Process number as -Infinity';
  }
  return smallNumber;
}

console.log(checkNumber(-Number.MAX_VALUE));

console.log(checkNumber(-Number.MAX_VALUE * 2));

