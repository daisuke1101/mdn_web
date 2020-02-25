// 添字が2, 3, 4の位置に要素がない配列
const array = [0, 1,,,, 5, 6];

// 値が割り当てられているものに限らず、すべての添字を表示
array.findIndex(function(value, index) {
    console.log('Visited index ', index, ' with value ', value);
});

// findIndexによって処理される各要素は、最初にcallbackが呼び出される前に設定される
// callbackに渡される値はfindIndexがその要素の添字を処理した時点での値となる
// 削除されたものを含め、すべての添字を表示
array.findIndex(function(value, index) {
    // 初回で要素5を削除
    if (index === 0) {
        console.log('Deleting array[5] with value ', array[5]);
        delete array[5];
    }
    console.log('Visitede index ', index, ' with value ', value);
});
