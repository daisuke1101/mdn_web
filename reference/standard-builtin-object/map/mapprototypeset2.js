var myMap = new Map();

myMap.set('bar', 'foo');
myMap.set(1, 'foobar');

console.log(myMap.get('bar'));  // foo

myMap.set('bar', 'fooooo');
console.log(myMap.get('bar'));  // fooooo