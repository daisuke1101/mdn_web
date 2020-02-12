function getCircleY(radians, radius) {  // 第一引数：角度(弧度法による)、第二引数：半径
    return Math.sin(radians) * radius;
}

console.log(getCircleY(1, 10));  // 8.414709848078965

console.log(getCircleY(2, 10));  // 9.092974268256818

console.log(getCircleY(Math.PI , 10));  // 1.2246467991473533e-15
