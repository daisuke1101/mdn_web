var list = document.querySelector('.output ul');
var searchInput = document.querySelector('.output input');
var searchBtn = document.querySelector('.output button');

list.innerHTML = '';

var myHistory = [];

searchBtn.onclick = function() {
  // 検索ボックスが空ではない場合のみ検索語を受け付けるようにします
  if (searchInput.value !== '') {
    // No.1
    myHistory.push(searchInput.value);
    // 表示中の一覧を空にして、同じ項目が表示されないようにして、
    // 結果は検索語が入力される度に毎回作り直されます。
    list.innerHTML = '';

    // 配列をループして、リスト内の全ての検索語を表示します
    for (var i = 0; i < myHistory.length; i++) {
      itemText = myHistory[i];
      var listItem = document.createElement('li');
      listItem.textContent = itemText;
      list.appendChild(listItem);
    }

    // 配列の長さが 5以上になったら一番古い検索語を削除します
    if (myHistory.length >= 5) {
      // No.2
      myHistory.shift();

    }

    // 次の検索語を受け付けるため、検索ボックスを空にしてフォーカスします
    searchInput.value = '';
    searchInput.focus();
  }
}
