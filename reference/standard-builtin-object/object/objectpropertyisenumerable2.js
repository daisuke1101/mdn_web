a = new Array('is enumerable');

a.propertyIsEnumerable(0);
a.propertyIsEnumerable('length');

Math.propertyIsEnumerable('random');
this.propertyIsEnumerable('Math');