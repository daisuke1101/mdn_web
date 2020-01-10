function deepFreeze(object) {

  // オブジェクトで定義されたプロパティ名を取得
  var propNames = Object.getOwnPropertyNames(object);

  // 自分自身を凍結する前にプロパティを凍結

  for (let name of propNames) {
    let value = object[name];

    object[name] = value && typeof value === 'object' ?
      deepFreeze(value) : value;
  }

  return Object.freeze(object);
}

var obj2 = {
  internal: {
    a: null
  }
};

deepFreeze(obj2);

obj2.internal.a = 'anotherValue';
obj2.internal.a;

