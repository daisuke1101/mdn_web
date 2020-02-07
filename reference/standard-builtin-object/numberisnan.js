function typeOfNaN(x) {
  if(Number.isNaN(x)) {
    return 'Number NaN';
  }
  if(isNaN(x)) {
    return 'NaN';
  }
}

console.log(typeOfNaN('100F'));  // NaN

console.log(typeOfNaN(NaN));  // Number NaN

