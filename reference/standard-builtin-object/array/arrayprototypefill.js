const array1 = [1, 2, 3, 4];

// ２～４を０で埋める
console.log(array1.fill(0, 2, 4));  // (4) [1, 2, 0, 0]

// １～を５で埋める
console.log(array1.fill(5, 1));  // (4) [1, 5, 5, 5]

// 全部６で埋める
console.log(array1.fill(6));  // (4) [6, 6, 6, 6]