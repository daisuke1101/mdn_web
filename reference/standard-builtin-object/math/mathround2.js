// 浮動小数点数計算による誤差を解決するための関数
function round(number, precision) {  // 第一引数：四捨五入すべき値、第二引数：小数点以下の桁数
    var shift = function(number, precision, reverseShift) {  // 第一引数：四捨五入すべき値、第二引数：小数点以下の桁数、第三引数：整数部の値を逆方向に動かすためのBool値
        if(reverseShift) {
            precision = -precision;
        }
        var numArray = ("" + number).split("e");
        return +(numArray[0] + "e" + (numArray[1] ? (+numArray[1] + precision) : precision));
    }
    return shift(Math.round(shift(number, precision, false)), precision, true);
}

console.log(round(1.005, 2));  // 1.01

console.log(round(1.050, 1));  // 1.1

console.log(round(3456.3456, 3));  // 3456.346
console.log(round(3456.3456, 2));  // 3456.15
console.log(round(3456.3456, 1));  // 3456.3
console.log(round(3456.3456, 0));  // 3456
console.log(round(3456.3456, -1));  // 3460
console.log(round(3456.3456, -2));  // 3500
console.log(round(3456.3456, -3));  // 3000

console.log(round(undefined, 1));  // NaN
console.log(round(null, 1));  // NaN
console.log(round("a", 1));  // NaN
console.log(round(1, null));  // NaN
console.log(round(1, undefined));  // NaN
console.log(round(1, "a"));  // NaN