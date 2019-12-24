function sanitise(x) {
  if(isNaN(x)) {
    return NaN;
  }
  return x;
}

console.log(sanitise('1'));  // 1を表示

console.log(sanitise('NotANumber'));  // NaNを表示
