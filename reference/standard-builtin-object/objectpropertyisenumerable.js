o = new Object();
a = new Array();
o.prop = 'is enumerable';
a[0] = 'is enumerable';

o.propertyIsEnumerable('prop');
a.propertyIsEnumerable(0);