var media = document.querySelector('video');
var controls = document.querySelector('.controls');

var play = document.querySelector('.play');
var stop = document.querySelector('.stop');
var rwd = document.querySelector('.rwd');
var fwd = document.querySelector('.fwd');

var timerWrapper = document.querySelector('.timer');
var timer = document.querySelector('.timer span');
var timerBar = document.querySelector('.timer div');

// 動画再生準備
media.removeAttribute('controls');
controls.style.visibility = 'visible';

// 再生・一時停止ボタンの機能設定
play.addEventListener('click', playPauseMedia);

// 再生停止ボタン・再生終了後停止の機能設定
stop.addEventListener('click', stopMedia);
media.addEventListener('ended', stopMedia);

// 巻き戻し・早送りボタンの機能設定
rwd.addEventListener('click', mediaBackward);
fwd.addEventListener('click', mediaForward);

var intervalFwd;
var intervalRwd;

// 再生時間
media.addEventListener('timeupdate', setTime);

// 巻き戻し・早送りボタンの機能を一時停止
rwd.classList.remove('active');
fwd.classList.remove('active');

clearInterval(intervalRwd);
clearInterval(intervalFwd);


// Functions

// 動画の再生・一時停止
function playPauseMedia() {
  if(media.paused) {
    play.setAttribute('data-icon','u');
    media.play();
  } else {
    play.setAttribute('data-icon','P');
    media.pause();
  }
}

// 動画の再生停止
function stopMedia() {
  media.pause();  // HTMLMediaElementAPIにstop()メソッドは実装されていないので、一度pause()
  media.currentTime = 0;  // その後、currentTime = 0で、開始位置への巻き戻し処理を行う
  play.setAttribute('data-icon','P');
}

// 動画の巻き戻し
function mediaBackward() {
  clearInterval(intervalFwd);
  fwd.classList.remove('active');

  if(rwd.classList.contains('active')) {
    rwd.classList.remove('active');
    clearInterval(intervalRwd);
    media.play();
  } else {
    rwd.classList.add('active');
    media.pause();
    intervalRwd = setInterval(windBackward, 200);
  }
}

// 動画の早送り
function mediaForward() {
  clearInterval(intervalRwd);
  rwd.classList.remove('active');

  if(fwd.classList.contains('active')) {
    fwd.classList.remove('active');
    clearInterval(intervalFwd);
    media.play();
  } else {
    fwd.classList.add('active');
    media.pause();
    intervalFwd = setInterval(windForward, 200);
  }
}

// 動画の巻き戻し
function windBackward() {
  if(media.currentTime <= 3) {
    rwd.classList.remove('active');
    clearInterval(intervalRwd);
    stopMedia();
  } else {
    media.currentTime -= 3;
  }
}

// 動画の早送り
function windForward() {
  if(media.currentTime >= media.duration - 3) {
    fwd.classList.remove('active');
    clearInterval(intervalFwd);
    stopMedia();
  } else {
    media.currentTime += 3;
  }
}

// タイマー表示
function setTime() {
  var minutes = Math.floor(media.currentTime / 60);
  var seconds = Math.floor(media.currentTime - minutes * 60);
  var minuteValue;
  var secondValue;

  if (minutes < 10) {
    minuteValue = '0' + minutes;
  } else {
    minuteValue = minutes;
  }

  if (seconds < 10) {
    secondValue = '0' + seconds;
  } else {
    secondValue = seconds;
  }

  var mediaTime = minuteValue + ':' + secondValue;
  timer.textContent = mediaTime;

  var barLength = timerWrapper.clientWidth * (media.currentTime/media.duration);
  timerBar.style.width = barLength + 'px';
}
