function superclass() {}
superclass.prototype = {
  // メソッド・プロパティ定義
};
function subclass() {}
subclass.prototype = Object.create(
  superclass.prototype,
  {
    // メソッド・プロパティ定義
  }
);

