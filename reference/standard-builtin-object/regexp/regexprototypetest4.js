function testLastIndex (regex, str) {
    console.log('lastIndexは' + regex.lastIndex + '、testは' + regex.test(str));
}

var regex = /foo/g;

testLastIndex(regex, 'foo');  // lastIndexは0、testはtrue
testLastIndex(regex, 'foo');  // lastIndexは3、testはfalse
testLastIndex(regex, 'barfoo');  // lastIndexは0、testはtrue
testLastIndex(regex, 'foobar');  // lastIndexは6、testはfalse(別な文字列で検索してもlastIndexがリセットされず)