var list = document.querySelector('.output ul');
var totalBox = document.querySelector('.output p');
var total = 0;
list.innerHTML = '';
totalBox.textContent = '';
// No.1
var products = [
                'パンツ:6.99',
                '靴下:5.99',
                'T シャツ:14.99',
                'ズボン:31.99',
                '靴:23.99'];

for (var i = 0; i < products.length; i++) { // No.2
  // No.3
  colon = products[i].indexOf(':');
  product = products[i].slice(0,colon);
  price = Number(products[i].slice(colon + 1));

  // No.4
  total += price;

  // No.5

  itemText = product + '_$' + price;
  
  var listItem = document.createElement('li');
  listItem.textContent = itemText;
  list.appendChild(listItem);
}

totalBox.textContent = '合計: $' + total.toFixed(2);
