const set1 = new Set();

set1.add(42);
set1.add(42);
set1.add(13);

for (var item of set1) {
    console.log(item);
}

// 42
// 13