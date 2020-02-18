const object1 = {
  property1: 42
};

Object.seal(object1);
object1.property1 = 33;
console.log(object1.property1);
// 33を表示

delete object1.property1;  // 封印されているオブジェクトからプロパティは削除不可
console.log(object1.property1);
// 33を表示

