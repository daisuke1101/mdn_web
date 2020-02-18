var pattern = {
  get() {
    return 'I always return this string, ' + 
           'whatever you have assigned';
  },
  set() {
    this.myname = 'this is my name string';
  }
};

function TestDefineSetAndGet() {
  Object.defineProperty(this, 'myproperty', pattern);
}

var instance = new TestDefineSetAndGet();
instance.myproperty = 'test';
console.log(instance.myproperty);
// 

console.log(instance.myname);  // 
