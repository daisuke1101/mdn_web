const items = ['item1', 'item2', 'item3'];
const copy = [];

// before
for (let i = 0; i < items.length; i++) {
    copy.push(items[i]);
}

console.log(items);  // (3) ["item1", "item2", "item3"]

// after
items.forEach(function(item) {
    copy.push(item);
});

console.log(copy);  // (6) ["item1", "item2", "item3", "item1", "item2", "item3"]