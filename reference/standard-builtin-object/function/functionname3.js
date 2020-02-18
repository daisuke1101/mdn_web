let object = {
    someMethod: function object_someMethod() {}
};
console.log(object.someMethod.name);

try {object_someMethod} catch(e) {console.log(e);}
