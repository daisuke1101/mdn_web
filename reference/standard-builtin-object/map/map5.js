var kvArray = [['キー１', '値１'], ['キー２', '値２']];

// 通常のMapコンストラクタを用いて、キー・値の2次元配列をマップに変換する
var myMap = new Map(kvArray);
console.log(myMap.get('キー１'));  // 値１

// 展開演算子を用いて、マップをキー・値の2次元配列に変換する
console.log(Array.from(myMap));  // (2) [Array(2), Array(2)]
// 0: (2) ["キー１", "値１"]
// 1: (2) ["キー２", "値２"]
// length: 2
// __proto__: Array(0)

// あるいは展開演算子をキーまたは値のイテレータに使って、キーまたは値のみの配列を得る
console.log(Array.from(myMap.keys()));  // (2) ["キー１", "キー２"]
// 0: "キー１"
// 1: "キー２"
// length: 2
// __proto__: Array(0)