// ES6以降で有効
const object1 = {
  a: 'somestring',
  b: 42
};

for (let [key,value] of Object.entries(object1)) {
  console.log(`${key}: ${value}`);
}

