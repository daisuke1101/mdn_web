let o = {
    get foo(){},
    set foo(x){}
};

var descriptor = Object.getOwnPropertyDescriptor(o, 'foo');
console.log(descriptor.get.name);
console.log(descriptor.set.name);