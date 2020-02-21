var indices = [];
var array = ['a', 'b', 'a', 'c', 'a', 'd'];
var element = 'a';
var idx = array.lastIndexOf(element);

while(idx != -1) {
    indices.push(idx);
    idx = (idx > 0 ? array.lastIndexOf(element, idx -1) : -1);  // idx == 0の判定(検索する値が配列の最初の要素にあると、その値はfromIndexに関わらず常にヒットしてしまうため)
}

console.log(indices);  // (3) [4, 2, 0]