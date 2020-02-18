this.x = 9;  // thisはブラウザのグローバルな"window"オブジェクト
var module = {
    x: 81,
    getX: function() { return this.x; }
}

console.log(module.getX());  // ここでは、モジュールプロパティのthis.xの値である81が出力される
// getX「function() { return this.x; }」は、moduleプロパティのスコープで呼び出されるため

var retrieveX = module.getX;  // 「function() { return this.x; } 」が呼び出されるが、
console.log(retrieveX());
// この関数はグローバルスコープで呼び出されるため、ブラウザのグローバルなthis.xの値である9が出力される

// thisにmoduleを割り当てた新しい関数を呼び出し
// グローバル変数のxと、モジュールプロパティのxとを混同しないように！
var boundGetX = retrieveX.bind(module);
console.log(boundGetX());