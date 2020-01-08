if (typeof Object.assign != 'function') {
  // writable: true 、 enumerable: false 、 configurable: true でなければならない
  Object.defineProperty(Object, "assign", {
    value: function assign(target, varArgs) {  // .length of function is 2
      'use strict';
      if (target == null) { // undefined か null の場合、TypeError
        throw new TypeError('Can\'t convert undefined or null to object');
      }

      var to = Object(target);

      for (var index = 1; index < arguments.length; index++) {
        var nextSource = arguments[index];

        if (nextSource != null) {  // undefined か null の場合、スキップする
          for (var nextKey in nextSource) {
            // バグ回避
            if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
              to[nextKey] = nextSource[nextKey];
            }
          }
        }
      }
      return to;
    },
    writable: true,
    configurable: true
  });
}
