// 添字が2, 3, 4の位置に要素がない配列
const array = [0, 1,,,, 5, 6];

// 値が割り当てられているものに限らず、すべての添字を表示
array.find(function(value, index) {
    console.log('Visited index ', index, ' with value ', value);
});

// findによって処理される各要素は、最初にcallbackが呼び出される前に設定される
// callbackに渡される値はfindがその要素の添字を処理した時点での値となる
// 削除されたものを含め、すべての添字を表示
array.find(function(value, index) {
    // 初回で要素5を削除
    if (index === 0) {
        console.log('Deleting array[5] with value ', array[5]);
        delete array[5];
    }
    console.log('Visitede index ', index, ' with value ', value);
});

// Visited index  0  with value  0
// Visited index  1  with value  1
// Visited index  2  with value  undefined
// Visited index  3  with value  undefined
// Visited index  4  with value  undefined
// Visited index  5  with value  5
// Visited index  6  with value  6

// Deleting array[5] with value  5
// Visitede index  0  with value  0
// Visitede index  1  with value  1
// Visitede index  2  with value  undefined
// Visitede index  3  with value  undefined
// Visitede index  4  with value  undefined
// Visitede index  5  with value  undefined
// Visitede index  6  with value  6
