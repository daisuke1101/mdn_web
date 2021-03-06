var str = 'A \uD87E\uDC04 Z';  // 非Basic Multilingual-Plane文字も直接扱えます
for (var i = 0, chr; i < str.length; i++) {
    if ((chr = getWholeChar(str, i)) === false) {
        continue;
    }

    console.log(chr);
}

function getWholeChar(str ,i) {
    var code = str.charCodeAt(i);

    if (Number.isNaN(code)) {
        return '';
    }
    if (code < 0xD800 || code > 0xDFFF) {
        return str.charAt(i);
    }

    if (0xD800 <= code && code <= 0xDBFF) {
        if (str.length <= (i + 1)) {
            throw 'High surrogate without following low surrogate';
        }
        var next = str.charCodeAt(i + 1);
        if(0xDC00 > next || next > 0xDFFF) {
            throw 'High surrogate without following low surrogate';
        }
        return str.charAt(i) + str.charAt(i + 1);
    }
    if (i === 0) {
        throw 'Low surrogate without preceding high surrogate';
    }
    var prev = str.charCodeAt(i - 1);

    if (0xD800 > prev || prev > 0xDBFF) {
        throw 'Low surrogate without preceding high surrogate';
    }
    return false;
}