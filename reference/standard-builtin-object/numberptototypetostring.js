function hexColour(c) {
    if(c < 256) {
        return Math.abs(c).toString(16);
    }
    return 0;
}

// 引数が数字の場合
console.log(hexColour(233));  // e9

// 引数が文字列の場合→数字の場合は変換される
console.log(hexColour('11'));  // b
