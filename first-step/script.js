// 関数：HTMLのbodyタグ内の一番下に新しい段落を追加

  function createParagraph() {
    var para = document.createElement('p');
    para.textContent = 'ボタンが押されました';
    document.body.appendChild(para);
  }

/*
  １．ページ内のボタンへの参照を全て取り出して配列に入れる
  ２．全てのボタンをループで回し、クリックイベントのリスナーを追加

  どのボタンが押されても、createParagraph()関数が実行されるようにする
*/
  var buttons = document.querySelectorAll('button');

  for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', createParagraph);
  }
