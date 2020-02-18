const module = {
    x: 42,
    getX: function() {
        return this.x;
    }
}

console.log(module.getX());  // moduleオブジェクトのxが参照される

const unboundedGetX = module.getX;
console.log(unboundedGetX());  // グローバルスコープで呼び出される関数、thisはグローバルオブジェクトとなる
// undefined

// thisにmoduleを割り当てた状態で呼び出し
const boundGetX = unboundedGetX.bind(module);
console.log(boundGetX());
// 42