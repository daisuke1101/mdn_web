function Parent() {}
function CreatedConstructor() {}

CreatedConstructor.prototype = Object.create(Parent.prototype);
CreatedConstructor.prototype.constructor = CreatedConstructor;  // 元のコンストラクタを復帰

CreatedConstructor.prototype.create = function create() {
    return new this.constructor();
}

new CreatedConstructor().create().create();  // 元のコンストラクタを復帰するればエラーにならない