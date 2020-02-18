function styleHyphenFormat(propertyName) {
    function upperToHyphenLower(match, offset, string) {
        return (offset > 0 ? '-' : '') + match.toLowerCase();
    }
    return propertyName.replace(/[A-Z]/g, upperToHyphenLower);
}

console.log(styleHyphenFormat('borderTop'));  // border-top