class MyArray extends Array {
    // speciesを親のArrayコンストラクタで上書き
    // MyArrayではなくArrayを返す
    static get [Symbol.species]() { return Array; }
}
var a = new MyArray(1, 2, 3);
var mapped = a.map(x => x * x);

console.log(mapped instanceof MyArray);  // false
console.log(mapped instanceof Array);  // true