var arr = [
    { id: 15 },
    { id: -1 },
    { id: 0 },
    { id: 3 },
    { id: 12.2 },
    { },
    { id: null },
    { id: NaN },
    { id: 'undefined' }
];

var invalidEntries = 0;

function isNumber(obj) {
    return obj !== undefined && typeof(obj) === 'number' && !isNaN(obj);  // undefinedでなく、数値型で、isNaNでないこと
}

function filterByID(item) {
    if(isNumber(item.id) && item.id !== 0) {
        return true;
    }
    invalidEntries++;
    return false;
}

var arrByID = arr.filter(filterByID);

console.log('Filtered Array \n', arrByID);  // (4) [{…}, {…}, {…}, {…}]
// 0: {id: 15}
// 1: {id: -1}
// 2: {id: 3}
// 3: {id: 12.2}
// length: 4
// __proto__: Array(0)

console.log('Number of Invalid Entries = ', invalidEntries);  // 