let object = {
    // anonymous
    someMethod: function() {}
};

object.someMethod.name = 'otherMethod';
console.log(object.someMethod.name);  // 'someMethod'と表記