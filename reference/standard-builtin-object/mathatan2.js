// 度数法で半直線と正のx軸との角度を計算
function calcAngleDegrees(x, y) {
    return Math.atan2(y, x) * 180 / Math.PI;
}

console.log(calcAngleDegrees(5, 5));  // 45

console.log(calcAngleDegrees(10, 10));  // 45

console.log(calcAngleDegrees(0, 10));  // 90