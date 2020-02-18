class ValidatorClass {
    get [Symbol.toStringTag]() {
        return 'Validator';
    }
}

console.log(Object.prototype.toString.call(new ValidatorClass()));  // [object Validator]を表示