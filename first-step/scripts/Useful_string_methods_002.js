var list = document.querySelector('.output ul');
list.innerHTML = '';
var cities = ['lonDon', 'ManCHESTer', 'BiRmiNGHAM', 'liVERpoOL'];
for(var i = 0; i < cities.length; i++) {
  var input = cities[i];
  // この下にコードを書いて下さい
  lower = input.toLowerCase();
  firstChar = lower.charAt(0);
  transfered = lower.replace(firstChar,firstChar.toUpperCase());

  var result = transfered;
  var listItem = document.createElement('li');
  listItem.textContent = result;
  list.appendChild(listItem);
}
