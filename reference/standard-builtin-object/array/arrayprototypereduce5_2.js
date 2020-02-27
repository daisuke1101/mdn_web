var names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice'];
var countedNames = names.reduce(
    (allNames, name) => {
    if(name in allNames) {
        allNames[name]++;
    } else {
        allNames[name] = 1;
    }
    return allNames;
}, {});

console.log(countedNames);  // {Alice: 2, Bob: 1, Tiff: 1, Bruce: 1}