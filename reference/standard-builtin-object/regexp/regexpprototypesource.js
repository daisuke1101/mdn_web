const regex1 = /fooBar/ig;

console.log(regex1.source);  // fooBar

console.log(new RegExp().source);  // (?:)←(ES5以降、空の正規表現に対して空文字を返さないため)

console.log(new RegExp('\n').source === '\n');  // false(ES5以降、\でエスケープしないとfalse)

console.log(new RegExp('\n').source === '\\n');  // true(ES5以降、\でエスケープしたのでtrueとなる)