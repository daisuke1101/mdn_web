// WEBブラウザでは、windowオブジェクトもグローバルオブジェクト。
console.log(this === window);  // trueを表示

this.a = 37;
console.log(window.a);  // 37を表示

this.b = 'Mozilla';
console.log(window.b);  // Mozillaを表示
console.log(b);  // これもMozillaを表示