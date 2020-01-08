function myclass() {
}

var value;
Object.defineProperty(myclass.prototype,"x", {
  get() {
    return value;
  },
  set(x) {
    value = x;
  }
});

var a = new myclass();
var b = new myclass();
a.x = 1;
console.log(b.x);  // 1(派生クラスa,bともmyclassのアクセサーが継承されているため、当該アクセサーが値を保持するために変数を用いていると、派生クラスaのxが定義されると、別派生クラスbのxも同値になってしまう)

