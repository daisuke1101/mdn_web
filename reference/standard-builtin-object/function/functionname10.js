function Foo(){}
Object.defineProperty(Foo, 'name', {writable: true});
Foo.name = function() {};

let fooInstance = new Foo();
console.log(fooInstance.constructor.name);

Foo.name = 'Hello';
console.log(Foo.name);