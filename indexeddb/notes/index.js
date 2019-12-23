// Create needed constants
const list = document.querySelector('ul');
const titleInput = document.querySelector('#title');
const bodyInput = document.querySelector('#body');
const form = document.querySelector('form');
const submitBtn = document.querySelector('form button');

// 開いたデータベースを記憶しておくためのデータベース・オブジェクトのインスタンスを作成します。
let db;

window.onload = function() {
  // データベースを開きます。データベースは、まだ存在していない場合には
  // 新規作成されます (後述の onupgradeneeded を参照)。
  let request = window.indexedDB.open('notes_db', 1);

  // onerror ハンドラーは、データベースがうまく開けなかったことを意味します。
  request.onerror = function() {
    console.log('DATABASE FAILED to Open');
  };
  // onsuccess ハンドラーは、データベースがうまく開けたことを意味します。
  request.onsuccess = function() {
    console.log('DATABASE Opened SUCCESSFULLY');

    // 開いたデータベース・オブジェクトを、db という変数に記憶します。この変数は、以下でたくさん使われます。
    db = request.result;

    // IDB 内の既存のメモ書きを表示するために、displayData() 関数を実行します。
    displayData();
  };

  // これがまだ実行されていない場合に、データベースのテーブルを設定します。
  request.onupgradeneeded = function(e) {
    // 開いたデータベースに対する参照を求めます。
    let db = e.target.result;
    // 自動的にインクリメントするキーを含んでおり、メモ書きを中に保存するための
    // (基本的に一つのテーブルに類似した) objectStore を、作成します。
    let objectStore = db.createObjectStore('notes_os', { keyPath: 'id', autoIncrement: true });

    // objectStore が含むことになるデータ項目を定義します。
    objectStore.createIndex('title', 'title', { unique: false });
    objectStore.createIndex('body', 'body', { unique: false });

    console.log('DATABASE Setup COMPLETE');
  };

  // フォームが送信されたときに addData() 関数が実行されるように、onsubmit ハンドラーを作成します。
  form.onsubmit = addData;

  // addData() 関数を定義します。
  function addData(e) {
    // デフォルト動作を防止します。従来通りの方法でフォームを送信したくはないからです(ページリフレッシュ防止)。
    e.preventDefault();

    // フォーム・フィールドに入力された値を求めます。そして、それらの値を、データベースへ挿入すべく準備してあるオブジェクトに保存します。
    let newItem = { title: titleInput.value, body: bodyInput.value };

    // 読み書きのデータベース・トランザクションを開いて、データの追加に備えます。
    let transaction = db.transaction(['notes_os'], 'readwrite');

    // データベースに追加済みのオブジェクト・ストアを呼び出します。
    let objectStore = transaction.objectStore('notes_os');

    // newItem というオブジェクトをオブジェクト・ストアに追加するための要求を作ります。
    var request = objectStore.add(newItem);
    request.onsuccess = function() {
      // フォームをクリアして、次のエントリーの追加に備えます。
      titleInput.value = '';
      bodyInput.value = '';
    };

    // すべてが済んだら、完了するトランザクションの成功を報告します。
    transaction.oncomplete = function() {
      console.log('TRANSACTION COMPLETED: DATABASE Modification FINISHED');

      // displayData() を再度実行することによって、データの表示を更新して、新たに追加した項目を表示します。
      displayData();
    };

    transaction.onerror = function() {
      console.log('TRANSACTION NOT OPENED Due To Error');
    };
  }

  // displayData() 関数を定義します。
  function displayData() {
    // ここでは、表示を更新するたびにリスト要素の中身を空にします。
    // もしこのようにしなかったら、新たなメモ書きを追加するたびに複製を列挙する羽目になるでしょう。
    while (list.firstChild) {
      list.removeChild(list.firstChild);
    }

    // オブジェクト・ストアを開き、それから、カーソルを取得します。 
    // カーソルは、ストア内の異なるデータ項目のすべてにわたって反復処理を行うものです。
    let objectStore = db.transaction('notes_os').objectStore('notes_os');
    objectStore.openCursor().onsuccess = function(e) {
      // カーソルへの参照を求めます。
      let cursor = e.target.result;

      // 反復処理を行うべき別のデータ項目がまだあれば、このコードを実行し続けます。
      if(cursor) {
        // 各データ項目を表示する際にそのデータ項目を中に入れるための、リスト項目と h3 と p とを作成します。
        // HTML 断片を組み立てて、それをリスト内の最後に追加します。
        let listItem = document.createElement('li');
        let h3 = document.createElement('h3');
        let para = document.createElement('p');

        listItem.appendChild(h3);
        listItem.appendChild(para);
        list.appendChild(listItem);

        // h3 および para の内部に、カーソルからのデータを入れます。
        h3.textContent = cursor.value.title;
        para.textContent = cursor.value.body;

        // listItem の属性内部に、このデータ項目の ID を保存します。こうすると、 
        // listItem がどの項目に対応しているのかがわかります。これは、後で項目を削除したくなったときに有用です。
        listItem.setAttribute('data-note-id', cursor.value.id);

        // ボタンを作成し、それを各 listItem の内部に設置します。
        let deleteBtn = document.createElement('button');
        listItem.appendChild(deleteBtn);
        deleteBtn.textContent = 'Delete';

        // ボタンがクリックされたら deleteItem() 関数が実行されるように、
        // イベント・ハンドラーを設定します。
        deleteBtn.onclick = deleteItem;

        // カーソルにおける次の項目へと反復処理を進めます。
        cursor.continue();
      } else {
        // またもや、リスト項目が空であれば、'No notes stored' (メモ書きは何も保存されていません) というメッセージを表示します。
        if(!list.firstChild) {
          let listItem = document.createElement('li');
          listItem.textContent = 'No notes stored!';
          list.appendChild(listItem);
        }
        // 反復処理をすべきカーソル項目がこれ以上ない場合、そのように示します。
        console.log('Notes all displayed');
      }
    };
  }

  // deleteItem() 関数を定義します。
  function deleteItem(e) {
    // 削除したいタスクの名前 (訳注: ID の間違い?) を取り出します。
    // それを IDB で使おうとする前に、数値に変換する必要があります。
    // IDB のキーの値には、型による区別があるのです。
    let noteId = Number(e.target.parentNode.getAttribute('data-note-id'));

    // データベース・トランザクションを開き、当該タスクを削除します。その際、上記で取得した ID を用いて、当該タスクを見つけます。
    let transaction = db.transaction(['notes_os'], 'readwrite');
    let objectStore = transaction.objectStore('notes_os');
    let request = objectStore.delete(noteId);

    // データ項目を削除したことを報告します。
    transaction.oncomplete = function() {
      // ボタンの親——リスト項目——を削除します。
      // すると、それはもはや表示されなくなります。
      e.target.parentNode.parentNode.removeChild(e.target.parentNode);
      console.log('Note ' + noteId + ' deleted.');

      // 再びになりますが、リスト項目が空の場合は、'No notes stored' (メモ書きは何も保存されていません) というメッセージを表示します。
      if(!list.firstChild) {
        let listItem = document.createElement('li');
        listItem.textContent = 'No notes stored!';
        list.appendChild(listItem);
      }
    };
  }
};

//{
//  title: "Buy milk",
//  body: "Need both cows milk and soya.",
//  id: 8
//}




