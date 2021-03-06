function Foo() {}
function Bar() {}
function Baz() {}

Bar.prototype = Object.create(Foo.prototype);
Baz.prototype = Object.create(Bar.prototype);

var baz = new Baz();

console.log(Baz.prototype.isPrototypeOf(baz));  //
console.log(Bar.prototype.isPrototypeOf(baz));  //
console.log(Foo.prototype.isPrototypeOf(baz));  //
console.log(Object.prototype.isPrototypeOf(baz));  //