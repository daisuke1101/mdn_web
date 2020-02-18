function MyConstructor() {
    for (var nProp = 0; nProp < arguments.length; nProp++) {
        this['property' + nProp] = arguments[nProp];
    }
}

var myArray = [4, 'Hello world!', false];
var myInstance = MyConstructor.construct(myArray);  // Google Chromeではされず？

console.log(myInstance.property1);
console.log(myInstance instanceof MyConstructor);
console.log(myInstance.constructor);