function checkNumber(bigNumber) {
  if(bigNumber === Number.POSITIVE_INFINITY) {
    return 'Process number as Infinity';
  }
  return bigNumber;
}

console.log(checkNumber(Number.MAX_VALUE));

console.log(checkNumber(Number.MAX_VALUE * 2));

