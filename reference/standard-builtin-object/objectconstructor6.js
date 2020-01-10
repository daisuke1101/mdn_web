function ParentWithStatic() {}

ParentWithStatic.startPosition = { x: 0, y: 0 };
ParentWithStatic.getStartPosition = function getStartPosition() {
    return this.startPosition;
}

function Child(x, y) {
    this.position = {
        x: x,
        y: y
    };
}

Child.prototype = Object.create(ParentWithStatic.prototype);
Child.prototype.constructor = Child;

Child.prototype.getOffsetByInitialPosition = function getOffsetByInitialPosition() {
    var position = this.position;
    var startPosition = this.constructor.getStartPosition();

    return {
        offsetX: startPosition.x - position.x,
        offsetY: startPosition.y - position.y
    }
};