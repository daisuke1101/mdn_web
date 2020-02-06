// 別のコンテキストからthis値を渡すには、call()またはapply()を使用
// call()の場合は引数リストを、apply()の場合は引数の単一の配列を受け取る
var obj = {a: 'Custom'};

var a = 'Global';

function whatsThis() {
    return this.a;  // this値は関数の呼び出し方法に依存
}

console.log(whatsThis());  // Global
console.log(whatsThis.call(obj));  // Custom
console.log(whatsThis.apply(obj));  // Custom
