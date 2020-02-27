var TRUTHY_VALUES = [true, 'true', 1];

function getBoolean(value) {
    'use strict';

    if(typeof value === 'string') {
        value = value.toLowerCase().trim();
    }

    return TRUTHY_VALUES.some(function (t) {
        return t === value;
    });
}

console.log(getBoolean(false));  // false
console.log(getBoolean('false'));  // false
console.log(getBoolean(1));  // true
console.log(getBoolean('true'));  // true