function f() {
    return this.a;
}

var g = f.bind({a: 'azerty'});
console.log(g());  // azertyを表示

var h = g.bind({a: 'yoo'});  // bindは一度限り効力
console.log(h());  // yooは引き渡されず→azertyを表示

var o = {a: 37, f: f, g: g, h: h};
console.log(o.a, o.f(), o.g(), o.h());  // 37, 37,azerty, azerty