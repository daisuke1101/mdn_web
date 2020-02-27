const arraySparse = [1, 3, ,, 7];
let numCallbackRuns = 0;

arraySparse.forEach(function(element) {
    console.log(element);
    numCallbackRuns++;
});

console.log('numCallbackRuns: ' , numCallbackRuns);

// 1
// 3
// 7
// numCallbackRuns:  3
// 初期化されていない値については、コールバック関数呼び出しなし
// (疎らな配列)