console.log(JSON.parse('{}'));  // {}
console.log(JSON.parse('true'));  // true
console.log(JSON.parse('"foo"'));  // foo
console.log(JSON.parse('[1, 5, "false"]'));  // (3) [1, 5, "false"]
console.log(JSON.parse('null'));  // null