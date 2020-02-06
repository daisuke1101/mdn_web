var o = {f: function() {return this.a + this.b}};
var p = Object.create(o);

p.a = 1;
p.b = 4;

console.log(p.f());  // 5