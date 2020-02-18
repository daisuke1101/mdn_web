function splitString(stringToSplit, separator) {
    var arrayOfStrings = stringToSplit.split(separator);

    console.log('元の文字列："' + stringToSplit + '"');
    console.log('区切り："' + separator + '"');
    console.log('配列は ' + arrayOfStrings.length + ' 要素： ' + arrayOfStrings.join(' / '));
}

var tempestString = 'Oh brave new world that has such people in it.';
var monthString = 'Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec';

var space = ' ', comma = ',';

splitString(tempestString, space);
splitString(tempestString);  // separatorを省略した場合
splitString(monthString, comma);

// 元の文字列："Oh brave new world that has such people in it."
// 区切り：" "
// 配列は 10 要素： Oh / brave / new / world / that / has / such / people / in / it.

// 元の文字列："Oh brave new world that has such people in it."
// 区切り："undefined"
// 配列は 1 要素： Oh brave new world that has such people in it.

// 元の文字列："Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec"
// 区切り：","
// 配列は 12 要素： Jan / Feb / Mar / Apr / May / Jun / Jul / Aug / Sep / Oct / Nov / Dec