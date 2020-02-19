class MyRegExp extends RegExp {
    constructor(pattern, flags, count) {
        super(pattern, flags);
        this.count = count;
    }
    [Symbol.replace](str, replacement) {
        // Perform @@replace |count| times.
        var result = str;
        for (var i = 0; i < this.count; i++) {
            result = RegExp.prototype[Symbol.replace].call(this, result, replacement);
        }
        return result;
    }
}

var re = new MyRegExp('\\d', '', 3);
var str = '01234567';
var newstr = str.replace(re, '#');  // String.prototype.replace calls re[@@replace].
console.log(newstr);  // ###34567