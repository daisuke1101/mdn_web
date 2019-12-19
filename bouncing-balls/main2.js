// setup canvas

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

const width = canvas.width = window.innerWidth;
const height = canvas.height = window.innerHeight;

const counter = document.querySelector('#count');
const timer = document.querySelector('#time');
var ballCount = 0;




// function to generate random number

function random(min,max) {
  const num = Math.floor(Math.random()*(max-min)) + min;
  return num;
}

function Shape(x, y, velX, velY, exists) {  // 親オブジェクトShape
  this.x = x;
  this.y = y;
  this.velX = velX;
  this.velY = velY;
  this.exists = exists;
}

function Ball(x, y, velX, velY, color, size, exists) {  // Shapeを継承
  Shape.call(this, x, y, velX, velY, exists);
  this.color = color;
  this.size = size;
}

// 【追加】
Ball.prototype = Object.create(Shape.prototype);
Ball.prototype.constructor = Ball;

//function EvilCircle(x, y, velX, velY, color, size, exists){ 【間違い】
function EvilCircle(x, y, exists){ // x, y, existsのみ、color, sizeは指定済
  Shape.call(this, x, y, 20, 20, exists);
  this.color = 'white';
  this.size = 10;
}

// 【追加】
EvilCircle.prototype = Object.create(Shape.prototype);
EvilCircle.prototype.constructor = EvilCircle;

Ball.prototype.draw = function() {
  ctx.beginPath();
  ctx.fillStyle = this.color;
  ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
  ctx.fill();
}

Ball.prototype.update = function() {
  if((this.x + this.size) >= width) {
    this.velX = -(this.velX);
  }

  if((this.x - this.size) <= 0) {
    this.velX = -(this.velX);
  }

  if((this.y - this.size) >= height) {
    this.velY = -(this.velY);
  }

  if((this.y + this.size) <= 0) {
    this.velY = -(this.velY);
  }

  this.x += this.velX;
  this.y += this.velY;
}

Ball.prototype.collisionDetect = function() {
  for(var j = 0; j < balls.length; j++) {
    if(!(this === balls[j])) {
      var dx = this.x - balls[j].x;
      var dy = this.y - balls[j].y;
      var distance = Math.sqrt(dx * dx + dy * dy);

      if(distance < this.size + balls[j].size) {
        balls[j].color = this.color = 'rgb(' + random(0, 255) + ',' + random(0, 255) + ',' + random(0, 255) + ')';
      }
    }
  }
}

EvilCircle.prototype.draw = function() {
  ctx.beginPath();
  ctx.lineWidth = 3;
  ctx.strokeStyle = this.color;
  ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
  ctx.stroke();
}

EvilCircle.prototype.checkBounds = function() {
  if((this.x + this.size) >= width) {
    //this.x -= ((this.x + this.size) - width);
    this.x -= this.size;
  }

  if((this.x - this.size) <= 0) {
    //this.x += (0 - (this.x - this.size))
    this.x += this.size;
  }

  if((this.y - this.size) >= height) {
    //this.y -= ((this.y + this.size) - height);
    this.y -= this.size;
  }

  if((this.y + this.size) <= 0) {
    //this.y += (0 - (this.y - this.size));
    this.y += this.size;
  }
}

// EvilCircleをWASDキーで動かす
EvilCircle.prototype.setControls = function() {
  var _this = this;
  window.onkeydown = function(e) {
    if (e.keyCode === 65) {
      _this.x -= _this.velX;
    } else if (e.keyCode === 68) {
      _this.x += _this.velX;
    } else if (e.keyCode === 87) {
      _this.y -= _this.velY;
    } else if (e.keyCode === 83) {
      _this.y += _this.velY;
    }
  }
}

EvilCircle.prototype.collisionDetect = function() {
  for(var j = 0; j < balls.length; j++) {
    if(balls[j].exists === 'true') {
      var dx = this.x - balls[j].x;
      var dy = this.y - balls[j].y;
      var distance = Math.sqrt(dx * dx + dy * dy);

      if(distance < this.size + balls[j].size) {
        balls[j].exists = 'false';
        // 【以下追加】
        ballCount--;
        counter.textContent = 'Ball count:' + ballCount;  // ボールの数を表示
      }
    }
  }
}

  // ボールの設定
  var balls = [];

  while(balls.length < 25) {
    var size = random(10,20);
    var ball = new Ball(
      // ball position always drawn at least one ball width
      // away from the adge of the canvas, to avoid drawing errors
      random(0 + size, width - size),
      random(0 + size, height - size),
      random(-7, 7),
      random(-7, 7),
      'rgb(' + random(0, 255) + ',' + random(0, 255) + ',' + random(0, 255) + ')',
      size,
      'true'
    );
    balls.push(ball);
    // 【以下修正】
    ballCount++;
    counter.textContent = 'Ball count:' + ballCount;  // ボールの数を表示
  }

  // EvilCircleの設定
  var evilCircle = new EvilCircle(
    random(0, width),
    random(0, height),
    //this.velX,
    //this.VelY,
    //this.color,
    //this.size,
    'true'
  );

  evilCircle.setControls();  // EvilCircle制御

function loop() {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.2)';
  ctx.fillRect(0, 0, width, height);
  // ボール表示ルーチン
  for(var i = 0; i < balls.length; i++) {
    if(balls[i].exists === 'true') {
      balls[i].draw();
      balls[i].update();
      balls[i].collisionDetect();
    }
  }

  // EvilCircle表示ルーチン
  evilCircle.draw();
  evilCircle.checkBounds();
  evilCircle.collisionDetect();

  requestAnimationFrame(loop);
}

loop();

