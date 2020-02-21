// sliceを用いて、myCarからnewCarを生成
var myHonda = { color: 'red', wheels: 4, engine: { cylinders: 4, size: 2.2 } };
var myCar = [myHonda, 2, 'cherry condition', 'purchased 1997'];
var newCar = myCar.slice(0, 2);  // [(myHondaへの参照), 2]

// myCar, newCar と両方の要素から参照されているmyHondaのcolorの値を書き出す
console.log('myCar = ' + JSON.stringify(myCar));  // myCar = [{"color":"red","wheels":4,"engine":{"cylinders":4,"size":2.2}},2,"cherry condition","purchased 1997"]
console.log('newCar = ' + JSON.stringify(newCar));  // newCar = [{"color":"red","wheels":4,"engine":{"cylinders":4,"size":2.2}},2]
console.log('myCar[0].color = ' + myCar[0].color);  // myCar[0].color = red
console.log('newCar[0].color = ' + newCar[0].color);  // newCar[0].color = red

// myHondaのcolorを変更
myHonda.color = 'purple';
console.log('The new color of my Honda is ' + myHonda.color);  // The new color of my Honda is purple

// 両方の要素から参照されているmyHondaのcolorを書き出す
console.log('myCar[0].color = ' + myCar[0].color);  // myCar[0].color = purple
console.log('newCar[0].color = ' + newCar[0].color);  // newCar[0].color = purple