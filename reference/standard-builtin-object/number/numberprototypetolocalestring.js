function eArabic(x) {
    return x.toLocaleString('ar-EG');
}

console.log(eArabic(123456.789));  // ١٢٣٬٤٥٦٫٧٨٩

console.log(eArabic('123456.789'));  // 123456.789

console.log(eArabic(NaN));  // ليس رقم