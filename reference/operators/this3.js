function f1() {
    return this;
}

// ブラウザの場合
console.log(f1() === window);  // trueを表示

// Nodeの場合
//console.log(f1() === global);