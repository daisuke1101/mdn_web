class MyRegExp extends RegExp {
    [Symbol.split](str, limit) {
        var result = RegExp.prototype[Symbol.split].call(this, str, limit);
        return result.map(x => "(" + x + ")");
    }
}

var re = new MyRegExp('-');
var str = '2020-07-24';
var result = str.split(re);  // String.prototype.splitは再定義された[@@split]を呼び出す

console.log(result);  // (3) ["(2020)", "(07)", "(24)"]
// 0: "(2020)"
// 1: "(07)"
// 2: "(24)"
// length: 3
// __proto__: Array(0)