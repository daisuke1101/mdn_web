function clean(x) {
  if(x === Number.NaN) {
    return null;
  }
  if(isNaN(x)) {
    return 0;
  }
}

console.log(clean(Number.NaN));


