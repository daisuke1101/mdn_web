function replacer(match, p1, p2, p3, offset, string) {
    return [p1, p2, p3].join(' - ');
}

var newString = 'abc12345#$*%'.replace(/([^\d]*)(\d*)([^\w]*)/, replacer);
console.log(newString);  // abc - 12345 - #$*%