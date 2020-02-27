var map = Array.prototype.map;
var a = map.call('Hello World', function(x) {
    return x.charCodeAt(0);
});

console.log(a);  // (11) [72, 101, 108, 108, 111, 32, 87, 111, 114, 108, 100]