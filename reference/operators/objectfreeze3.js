let a = [0];
Object.freeze(a);

a[0] = 1;
a.push(2);


function fail() {
  'use strict';
  a[0] = 1;
  a.push(2);
}

fail();
