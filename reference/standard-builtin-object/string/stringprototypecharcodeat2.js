// 文字列の前に存在するものが不明な場合、非BMP文字を操作できるように設定
function fixedCharCodeAt(str, idx) {
    idx = idx || 0;
    var code = str.charCodeAt(idx);
    var hi, low;

    // High surrogate
    if(0xD800 <= code && code <= 0xDBFF) {
        hi = code;
        low = str.charCodeAt(idx + 1);
        if (isNaN(low)) {
            throw 'High surrogate not followed by low surrogate in fixedCharCodeAt()';
        }
        return ((hi - 0xD800) * 0x400) + (low - 0xDC00) + 0x10000;
    }
    // Low surrogate
    if (0xDC00 <= code && code <= 0xDFFF) {
        return false;
    }
    return code;
}

// 文字列の前に存在するものがわかっている場合、非BMP文字を操作できるように設定
function knownCharCodeAt(str, idx) {
    str += '';
    var code, end = str.length;

    var surrogatePairs = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g;
    while ((surrogatePairs.exec(str)) != null) {
        var li = surrogatePairs.lastIndex;
        if (li -2 < idx) {
            idx++;
        }
        else {
            break;
        }
    }

    if (idx >= end || idx < 0) {
        return NaN;
    }

    code = str.charCodeAt(idx);

    var hi, low;
    if(0xD800 <= code && code <= 0xDBFF) {
        hi = code;
        low = str.charCodeAt(idx + 1);
        return ((hi - 0xD800) * 0x400) + (low - 0xDC00) + 0x10000;
    }
    return code;
}