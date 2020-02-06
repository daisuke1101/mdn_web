// 戻り値がthisとなる関数を戻り値とするbarメソッドを持つobjを生成
// 戻り値となる関数はアロー関数として生成されているため、そのthisは
// 永続的にその囲まれた関数のthisに束縛されます。
// barの値は呼び出し時に設定でき、戻り値の関数の値に順に設定します。

var obj = {bar: function() {
    var x = (() => this);
    return x;
    }
};

// objのメソッドとして呼び出し、そのthisをobjに設定
// 戻り値の関数への参照をfnに割り当て
var fn = obj.bar();

// strictモードでは、thisを設定せずにfnを呼び出すと
// 通常はグローバルオブジェクトかundefinedがデフォルト
console.log(fn() === obj);  // trueを表示

// しかしobjのメソッドをcallすることなく参照するのは要注意
var fn2 = obj.bar;

// アロー関数呼び出しでthisはbarのthisに従う
console.log(fn2()() == window);  // trueを表示