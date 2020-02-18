function myclass() {
}

Object.defineProperty(myclass.prototype,"x", {
  get() {
    return this.stored_x;
  },
  set(x) {
    this.stored_x = x;
  }
});

var a = new myclass();
var b = new myclass();
a.x = 1;
console.log(b.x);  // undefined(変数の代わりに、this.stored_xプロパティを用いた場合)

