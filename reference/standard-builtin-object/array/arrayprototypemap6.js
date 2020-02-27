function returnInt(element) {
    return parseInt(element, 10);
}

console.log(['1', '2', '3'].map(returnInt));  // (3) [1, 2, 3]

console.log(['1', '2', '3'].map(str => parseInt(str)));  // (3) [1, 2, 3]

console.log(['1', '2', '3'].map(Number));  // (3) [1, 2, 3]

console.log(['1.1', '2.2e2', '3e300'].map(Number));  // (3) [1.1, 220, 3e+300]

console.log(['1.1', '2.2e2', '3e300'].map(str => parseInt(str)));  // (3) [1, 2, 3]