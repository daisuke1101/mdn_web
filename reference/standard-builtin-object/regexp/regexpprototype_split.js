class RegExp1 extends RegExp {
    [Symbol.split](str, limit) {
        const result = RegExp.prototype[Symbol.split].call(this, str, limit);
        return result.map(x => "(" + x + ")");
    }
}

console.log('2020-07-24'.split(new RegExp1('-')));  // ["(2020)", "(07)", "(24)"]
// 0: "(2020)"
// 1: "(07)"
// 2: "(24)"
// length: 3
// __proto__: Array(0)

console.log('2020-07-24'.split(new RegExp('-')));  // ["2020", "07", "24"]
// 0: "2020"
// 1: "07"
// 2: "24"
// length: 3
// __proto__: Array(0)

