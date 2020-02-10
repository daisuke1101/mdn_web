// 弧度法で直角三角形の角度を計算
function calcAngle(opposite, adjacent) {
    return Math.atan(opposite / adjacent);
}

console.log(calcAngle(8, 10));  // 0.6747409422235527

console.log(calcAngle(5, 3));  // 1.0303768265243125