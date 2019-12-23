// 必要な定数を作ります。
const rememberDiv = document.querySelector('.remember');
const forgetDiv = document.querySelector('.forget');
const form = document.querySelector('form');
const nameInput = document.querySelector('#entername');
const submitBtn = document.querySelector('#submitname');
const forgetBtn = document.querySelector('#forgetname');

const h1 = document.querySelector('h1');
const personalGreeting = document.querySelector('.personal-greeting');

// ボタンが押されたときにフォームが送信することをやめさせます。
form.addEventListener('submit', function(e) {
  e.preventDefault();
});

// 'Say hello' ボタンがクリックされたら関数を実行します。
submitBtn.addEventListener('click', function() {
  // 入力された名前をウェブストレージに保存します。
  localStorage.setItem('name', nameInput.value);
  // 個人に合わせた挨拶を表示するとともにフォーム表示を更新する
  // 措置をとるべく、nameDisplayCheck() を実行します。
  nameDisplayCheck();
});

// 'Forget' ボタンがクリックされたら関数を実行します。
forgetBtn.addEventListener('click', function() {
  // 保存してある名前をウェブストレージから削除します。
  localStorage.removeItem('name');
  // 再び一般的な挨拶を表示するとともにフォーム表示を更新する
  // 措置をとるべく、nameDisplayCheck() を実行します。
  nameDisplayCheck();
});

// nameDisplayCheck() という関数を定義します。
function nameDisplayCheck() {
  // 'name' というデータ項目がウェブストレージに保存されているかどうかを調べます。
  if(localStorage.getItem('name')) {
    // もし保存されていたら、個人に合わせた挨拶を表示します。
    let name = localStorage.getItem('name');
    h1.textContent = 'Welcome, ' + name;
    personalGreeting.textContent = 'Welcome to our website, ' + name + '! We hope you have fun while you are here.';
    // フォームのうち 'remember' の部分を隠し、'forget' の部分を表示します。
    forgetDiv.style.display = 'block';
    rememberDiv.style.display = 'none';
  } else {
    // もし保存されていなければ、一般的な挨拶を表示します。
    h1.textContent = 'Welcome to our website ';
    personalGreeting.textContent = 'Welcome to our website. We hope you have fun while you are here.';
    // フォームのうち 'forget' の部分を隠し、'remember' の部分を表示します。
    forgetDiv.style.display = 'none';
    rememberDiv.style.display = 'block';
  }
}

document.body.onload = nameDisplayCheck;
