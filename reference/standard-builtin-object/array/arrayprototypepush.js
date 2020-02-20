const animals = ['pigs', 'goats', 'sheep'];

const count = animals.push('cows');
console.log(count);  // 4
console.log(animals);  // (4) ["pigs", "goats", "sheep", "cows"]

animals.push('chickens', 'cats', 'dogs');
console.log(animals);  // (7) ["pigs", "goats", "sheep", "cows", "chickens", "cats", "dogs"]