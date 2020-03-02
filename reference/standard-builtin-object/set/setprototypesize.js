const set1 = new Set();
const object1 = new Object();

set1.add(42).add('forty two').add('forty two').add(object1);

console.log(set1);  // Set(3) {42, "forty two", {…}}
console.log(set1.size);  // 3