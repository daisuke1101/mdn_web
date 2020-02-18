function myclass() {
}

myclass.prototype.x = 1;
Object.defineProperty(myclass.prototype, "y", {
  writable: false,
  value: 1
});

var a = new myclass();
a.x = 2;
console.log(a.x);
console.log(myclass.prototype.x);
a.y = 2;
console.log(a.y);
console.log(myclass.prototype.y);

