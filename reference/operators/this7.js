function bar() {
    console.log(Object.prototype.toString.call(this));
}

bar.call(7);  // [object Number]を表示
bar.call('foo');  // [object String]を表示