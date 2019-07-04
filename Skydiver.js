'use strict';

function Skydiver(canvas) {
  this.canvas = canvas; 
  this.width = 80;
  this.height = 80;
  this.ctx = canvas.getContext('2d');
  this.x = (this.canvas.width / 2) - this.width / 2;
  this.y = 100; 
  this.direction = 0;
  this.velocity = 5;
  this.color = "black";
  this.lives = 3;
  this.img = new Image();
  this.img.src = "./images/skydiver.png";
};

Skydiver.prototype.setDirection = function(newDirection) {
  this.direction = newDirection;
};

Skydiver.prototype.move = function() {
  if (this.x < 0) {
    this.x = 0;
    this.direction = 0;
  } else if (this.x + this.width > this.canvas.width) {
    this.x = this.canvas.width - this.width;
    this.direction = 0;
  } else {
    this.x = this.x + this.direction * this.velocity;
  }
};

Skydiver.prototype.draw = function() {
  var ctx = this.ctx;
  ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
};



