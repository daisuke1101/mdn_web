class MyRegExp extends RegExp {
    constructor(str) {
        super(str)
        this.pattern = str;
    }
    [Symbol.search](str) {
        return str.indexOf(this.pattern);
    }
}

var re = new MyRegExp('a+b');
var str = 'ab a+b';
var result = str.search(re);  // String.prototype.searchは再定義した[@@search]を呼び出す

console.log(result);  // 3