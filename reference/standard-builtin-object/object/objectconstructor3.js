function Parent() {}
Parent.prototype.parentMethod = function parentMethod() {};

function Child() {}
Child.prototype = Object.create(Parent.prototype);  // Child のプロトタイプを Parent のプロトタイプで再定義

Child.prototype.constructor = Child;  // Child の元のコンストラクタを復帰