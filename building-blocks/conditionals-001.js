var select = document.querySelector('select');
var list = document.querySelector('ul');
var h1 = document.querySelector('h1');

select.onchange = function() {
  var choice = select.value;

  var days;

  // 条件式をここに書く
  if (choice === '2') {
    days = 28;
  } elseif ((choice === '4') || (choice === '6') || (choice === '9') || (choice === '11')) {
    days = 30;
  } else {
    days = 31;
  }

  createCalendar(days, choice + ' 月');
}

function createCalendar(days, choice) {
  list.innerHTML = '';
  h1.textContent = choice;
  for (var i = 1; i <= days; i++) {
    var listItem = document.createElement('li');
    listItem.textContent = i;
    list.appendChild(listItem);
  }
}

createCalendar(31,'1 月');
