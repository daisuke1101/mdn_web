function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

console.log(getRandomInt(3));  // 0~2

console.log(getRandomInt(1));  // 0 

console.log(Math.random());  // 0以上1未満の範囲で、浮動小数を表示