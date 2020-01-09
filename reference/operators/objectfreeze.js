const obj = {
  prop: 42
};

Object.freeze(obj);

obj.prop = 33;
// strictモードの場合はError

console.log(obj.prop);  // 42と表示される

