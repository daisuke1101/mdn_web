'use strict';

var sData = 'Wisen';

function display() {
    console.log('sData value is %s ',this.sData);
}

display.call();  // undefinedの'sData'のプロパティは読めない