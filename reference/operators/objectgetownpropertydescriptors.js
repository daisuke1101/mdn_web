const object1 = {
  property1: 42
};

const descriptors1 = Object.getOwnPropertyDescriptors(object1);

console.log(descriptors1.property1.writable);
// trueを表示

console.log(descriptors1.property1.value);
// 42を表示

