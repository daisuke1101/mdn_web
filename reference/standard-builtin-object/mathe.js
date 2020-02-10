function compoundOneYear(interestRate, currentVal) {
    return currentVal * (Math.E ** interestRate);  // currentValを自然対数の底をinterestRate(=利率)でべき乗した値で乗ずる
}

console.log(Math.E);  // 2.718281828459045

console.log((1 + (1/1000000)) ** 1000000);  // 2.7182804690957534

console.log(compoundOneYear(0.05, 100));  // 105.12710963760242
