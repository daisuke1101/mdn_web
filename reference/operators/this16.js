// リスナーとして呼び出された時、関連付けられた要素をblueにする
function bluify(e) {
    // 常にtrue
    console.log(this === e.currentTarget);
    // currentTargetとtargetが同一のオブジェクトの場合true
    console.log(this === e.target);
    this.style.backgroundColor = '#A5D9F3';
}

// ドキュメント中全要素のリストを取得
var elements = document.getElementsByTagName('*');

for (var i = 0; i < elements.length; i++) {
    elements[i].addEventListener('click', bluify,false);
}