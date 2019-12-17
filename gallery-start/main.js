const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Looping through images */

for(i = 1; i <= 5; i++ ) {
  var pictureName = './images/pic' + i + '.jpg';

  const newImage = document.createElement('img');
  newImage.setAttribute('src', pictureName);
  thumbBar.appendChild(newImage);

// newImageにonclickハンドラを追加するためには、イベントオブジェクトと匿名関数を使用
  newImage.onclick = function(e){
    const imgSrc = e.target.getAttribute('src');
    displayImage(imgSrc);
  }
}

function displayImage(imgName) {
  displayedImage.setAttribute('src', imgName);
}

// 画像表示終わり




/* Wiring up the Darken/Lighten button */

// 以下の処理については、匿名関数を使うべきでした…

btn.onclick = toggle;

function toggle() {

  const buttonClass = btn.getAttribute('class');

  if (buttonClass === 'dark') {
    btn.setAttribute('class', 'light');
    btn.textContent = 'Lighten';
    overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
  } else {
    btn.setAttribute('class', 'dark');
    btn.textContent = 'Darken';
    overlay.style.backgroundColor = 'rgba(0,0,0,0)';
  }

}
