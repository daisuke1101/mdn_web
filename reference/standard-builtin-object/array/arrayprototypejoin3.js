function f(a, b, c) {
    var s = Array.prototype.join.call(arguments);
    console.log(s);  // 
}
f(1, 'a', true);  // 1,a,true