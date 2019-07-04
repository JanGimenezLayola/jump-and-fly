'use strict';

function Enemy(canvas, randomY, side) {
  this.canvas = canvas;
  this.ctx = this.canvas.getContext('2d');
  this.y = randomY;
  this.velocity = 0;
  this.skySlide = -5;
  this.width = 60;
  this.height = 40;
  this.img = new Image();
  this.img.src = "./images/eagle-looking-left.png";
  if (side === "left") {
    this.direction = 1;
    this.x = 0 - this.width;
  } else {
    this.direction = -1;
    this.x = this.canvas.width;
  }
};

Enemy.prototype.move = function() {
 
  this.x = this.x + this.direction * this.velocity;
  this.y = this.y + this.skySlide;
};

Enemy.prototype.draw = function() {
  var ctx = this.ctx;
  ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
};

Enemy.prototype.respawn = function() {
  this.velocity = 6;
};