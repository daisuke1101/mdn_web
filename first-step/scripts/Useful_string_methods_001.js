var list = document.querySelector('.output ul');
list.innerHTML = '';
var greetings = ['Happy Birthday!',
                 'Merry Christmas my love',
                 'A happy Christmas to all the family',
                 'You\'re all I want for Christmas',
                 'Get well soon'];

for (var i = 0; i < greetings.length; i++) {
  var input = greetings[i];
  // 以下の条件の括弧内の内容を書き換えて下さい
  if (greetings[i].indexOf('Christmas')!== -1) {
    var result = input;
    var listItem = document.createElement('li');
    listItem.textContent = result;
    list.appendChild(listItem);
  }
}
