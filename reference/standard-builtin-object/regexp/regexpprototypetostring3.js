console.log(new RegExp().toString());  // /(?:)/(ES5以前の場合は、空の正規表現を返す)

console.log(new RegExp('\n').toString() === '/\n/');  // false(ES5以前の場合はtrue)
console.log(new RegExp('\n').toString() === '/\\n/');  // true(ES5以降、\nなどの行末記号はエスケープされる)