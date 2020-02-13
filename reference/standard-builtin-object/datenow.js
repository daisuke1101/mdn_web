// この例は動作に2秒かかります
const start = Date.now();

console.log('タイマー開始');

setTimeout(() => {
    const millis = Date.now() - start;
    console.log(`経過秒 = ${Math.floor(millis / 1000)}`);
}, 2000);