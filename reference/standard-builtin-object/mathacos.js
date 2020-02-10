// 弧度法で三角形の角度を計算
function calcAngle(adjacent, hypotenuse) {
    return Math.acos(adjacent / hypotenuse);
}

console.log(calcAngle(8,10));  // 0.6435011087932843

console.log(calcAngle(5, 3));  // NaN