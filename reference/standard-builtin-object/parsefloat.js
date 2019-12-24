function circumference(r) {
  return parseFloat(r) * 2.0 * Math.PI;
}

console.log(circumference(4.567));  // 28.695307297889173

console.log(circumference('4.567abcdefgh'));  // 28.695307297889173(先頭に数字を含む文字列の場合)

console.log(circumference('abcdefgh'));  // NaN
