// 初期設定

// U+1E9B: LATIN SMALL LETTER LONG S WITH DOT ABOVE
// U+0323: COMBINING DOT BELOW
var str = '\u1E9B\u0323';

// Canonically-composed form (NFC)

// U+1E9B: LATIN SMALL LETTER LONG S WITH DOT ABOVE
// U+0323: COMBINING DOT BELOW
console.log(str.normalize('NFC'));  // ẛ̣ '\u1E9B\u0323'
console.log(str.normalize());  // (デフォルト)ẛ̣ '\u1E9B\u0323'

// Canonically-decomposed form (NFD)

// U+017F: LATIN SMALL LETTER LONG S
// U+0323: COMBINING DOT BELOW
// U+0307: COMBINING DOT ABOVE
console.log(str.normalize('NFD'));  // ẛ̣ '\u017F\u0323\u0307'

// Compatibly-composed (NFKC)

// U+1E69: LATIN SMALL LETTER S WITH DOT BELOW AND DOT ABOVE
console.log(str.normalize('NFKC'));  // ṩ '\u1E69'

// Compatibly-decomposed (NFKD)

// U+0073: LATIN SMALL LETTER S
// U+0323: COMBINING DOT BELOW
// U+0307: COMBINING DOT ABOVE
console.log(str.normalize('NFKD'));  // ṩ '\u0073\u0323\u0307'