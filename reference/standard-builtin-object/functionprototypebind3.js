function list() {
    return Array.prototype.slice.call(arguments);
}

var list1 = list(1, 2, 3);
console.log(list1);

var leadingThirtysevenList = list.bind(null, 37);  // 予め先頭の引数が37に設定された関数となる
console.log(leadingThirtysevenList());

var list2 = leadingThirtysevenList();
console.log(list2);

var list3 = leadingThirtysevenList(1, 2, 3);
console.log(list3);