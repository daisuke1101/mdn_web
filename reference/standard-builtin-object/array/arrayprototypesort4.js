var items = ['réservé', 'premier', 'cliché', 'communiqué', 'café', 'adieu'];
// 非ASCII文字はString.localeCompareを比較関数に使用すること
items.sort(function (a, b) {
    return a.localeCompare(b);
});

console.log(items);  // (6) ["adieu", "café", "cliché", "communiqué", "premier", "réservé"]