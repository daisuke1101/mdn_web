function LateBloomer() {
    this.petalCount = Math.floor(Math.random() * 12) + 1;
}

LateBloomer.prototype.bloom = function() {
    window.setTimeout(this.declare.bind(this), 1000);
}

LateBloomer.prototype.declare = function() {
    console.log('I am a beautiful flower with ' + this.petalCount + ' petals!');
}

var flower = new LateBloomer();
flower.bloom();
