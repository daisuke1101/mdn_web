// 弧度法で直角三角形の角度を計算
function calcAngle(opposite, hypotenuse) {
    return Math.asin(opposite / hypotenuse);
}

console.log(calcAngle(6, 10));  // 0.6435011087932844

console.log(calcAngle(5, 3));  // NaN(-1 ~ 1の範囲外の場合、NaN)