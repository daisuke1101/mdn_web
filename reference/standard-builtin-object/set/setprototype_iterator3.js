var mySet = new Set();
mySet.add('0');
mySet.add(1);
mySet.add({});

for (var v of mySet) {
    console.log(v);
}
// 0
// 1
// {}