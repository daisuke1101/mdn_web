function jsFriendlyJSONStringify(s) {
    return JSON.stringify(s).replace(/\u2028/g, '\\u2028').replace(/\u2029/g, '\\u2029');
}

var s = {a: String.fromCharCode(0x2028), b: String.fromCharCode(0x2029)};

try {
    eval('(' + JSON.stringify(s) + ')');
} catch (e) {
    console.log(e); // "SyntaxError: unterminated string literal"
}

eval('(' + jsFriendlyJSONStringify(s) + ')');

// Firefox での console.log はコンソールにログ出力をする場合
//   Unicode エスケープを解除するので、alert を使う
//alert(jsFriendlyJSONStringify(s)); // {"a":"\u2028","b":"\u2029"}