var myRe = /ab*/g;
var str = 'abbcdefabh';
var myArray;

while ((myArray = myRe.exec(str)) !== null) {
    var msg = myArray[0] + 'を見つけました！';
    msg += '次の検索は、' + myRe.lastIndex + 'からです。';
    console.log(msg);
}

// abbを見つけました！次の検索は、3からです。
// abを見つけました！次の検索は、9からです。