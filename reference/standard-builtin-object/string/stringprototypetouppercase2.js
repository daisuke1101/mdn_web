const a = String.prototype.toUpperCase.call({
    toString: function toString() {
        return 'abcdef';
    }
});

const b = String.prototype.toUpperCase.call(true);

console.log(a, b);  // ABCDEF TRUE