'use strict';

function Enemy(canvas, randomY, side) {
  this.canvas = canvas;
  this.ctx = this.canvas.getContext('2d');
  this.y = randomY;
  this.velocity = 0;
  this.skySlide = -5;
  this.color = "red";
  this.width = 35;
  this.height = 20;
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
   this.ctx.fillStyle = this.color;
  this.ctx.fillRect(this.x, this.y, this.width, this.height);
};

Enemy.prototype.respawn = function() {
  this.velocity = 6;
};