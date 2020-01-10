var a = [];

a.propertyIsEnumerable('constructor');         // false を返す

function firstConstructor() {
    this.property = 'is not enumerable';
}

firstConstructor.prototype.firstMethod = function () {};

function secondConstructor() {
    this.method = function method() { return 'is enumerable'; };
}

secondConstructor.prototype = new firstConstructor;
secondConstructor.prototype.constructor = secondConstructor;

var o = new secondConstructor();
o.arbitraryProperty = 'is enumerable';

o.propertyIsEnumerable('arbitraryProperty');   // true を返す
o.propertyIsEnumerable('method');              // true を返す
o.propertyIsEnumerable('property');            // false を返す

o.property = 'is enumerable';

o.propertyIsEnumerable('property');            // true を返す


/* これらは propertyIsEnumerable が考慮しないプロトタイプであるため、
  （※最後の 2 つはイテレート可能であるにも関わらず）全て false を返します */
o.propertyIsEnumerable('prototype'); // false を返す (as of JS 1.8.1/FF3.6)
o.propertyIsEnumerable('constructor'); // false を返す
o.propertyIsEnumerable('firstMethod'); // false を返す