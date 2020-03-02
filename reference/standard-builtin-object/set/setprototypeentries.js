const set1 = new Set();
set1.add(42).add('forty two');

const iterator1 = set1.entries();

for (var entry of iterator1) {
    console.log(entry);
}
// (2) [42, 42]
// (2) ["forty two", "forty two"]