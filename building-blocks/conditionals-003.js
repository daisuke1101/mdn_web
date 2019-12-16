var select = document.querySelector('select');
var html = document.querySelector('.output');

select.onchange = function() {
  var choice = select.value;

  // ここに SWITCH ステートメントを書く
  switch (choice) {
    case 'white':
      update('white' , 'black');
      break;
    case 'black':
      update('black' , 'white');
      break;
    case 'purple':
      update('purple' , 'white');
      break;
    case 'yellow':
      update('yellow' , 'black');
      break;
    case 'psychedelic':
      update('purple' , 'yellow');
      break;
  }
}

function update(bgColor, textColor) {
  html.style.backgroundColor = bgColor;
  html.style.color = textColor;
}