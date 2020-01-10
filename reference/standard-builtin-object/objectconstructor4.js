function Parent() {}
function CreatedConstructor() {}

CreatedConstructor.prototype = Object.create(Parent.prototype);

CreatedConstructor.prototype.create = function create() {
    return new this.constructor();
}

new CreatedConstructor().create().create();  // TypeError