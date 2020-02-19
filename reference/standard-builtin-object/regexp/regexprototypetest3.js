function testinput(re, str) {
    var midstring;
    if(re.test(str)) {
        midstring = ' contains ';
    } else {
        midstring = ' doesn\'t contain ';
    }
    console.log(str + midstring + re.source);
}

console.log(testinput(/hello/gi, 'Hello world!'));  // Hello world! contains hello

console.log(testinput(/hello/g, 'Hello world!'));  // Hello world! doesn't contain hello
