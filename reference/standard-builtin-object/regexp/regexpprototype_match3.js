class MyRegExp extends RegExp {
    [Symbol.match](str) {
        var result = RegExp.prototype[Symbol.match].call(this, str);
        if(!result) return null;
        return {
            group(n) {
                return result[n];
            }
        }
    }
}

var re = new MyRegExp('([0-9]+)-([0-9]+)-([0-9]+)');
var str = '2020-07-24';
var result = str.match(re);

console.log(result.group(1));  // 2020
console.log(result.group(2));  // 07
console.log(result.group(3));  // 24