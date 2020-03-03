var circularReference = {};
circularReference.myself = circularReference;

console.log(JSON.stringify(circularReference));  // VM591:4 Uncaught TypeError: Converting circular structure to JSON