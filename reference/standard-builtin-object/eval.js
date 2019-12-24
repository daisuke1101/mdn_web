console.log(eval(2 + 2));  // 4を表示

console.log(eval(new String('2 + 2')));  // '2 + 2'を表示

console.log(eval('2 + 2') === eval('4'));  // trueを表示

console.log(eval('2 + 2') === eval(new String('2 + 2')));  // falseを表示

