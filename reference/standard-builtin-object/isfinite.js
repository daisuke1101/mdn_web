function div(x) {
  if (isFinite(1000 / x)) {
    return 'Number is NOT INFINITY';
  }
  return 'Number is INFINITY';
}

console.log(div(0));  // 'Number is INFINITY'

console.log(div(1));  // 'Number is NOT INFINITY'

