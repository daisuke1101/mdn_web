function C() {
    this.a = 37;
}

var o = new C();
console.log(o.a);  // 37

function C2() {
    this.a = 37;  // オブジェクトが構築中に返されたので、thisがバインドされている新しいオブジェクトは単に破棄されている
    return {a: 38};  // a値が上書きされる
}

o = new C2();
console.log(o.a);  // 38