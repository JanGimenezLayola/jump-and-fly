'use strict';

function Enemy(canvas, randomY, side) {
  this.canvas = canvas;
  this.ctx = this.canvas.getContext('2d');
  this.y = randomY;
  this.velocity = 3;
  this.color = "red";
  this.width = 15;
  this.height = 8;
  if (side === "left") {
    this.direction = 1;
    this.x = 0;
  } else {
    this.direction = -1;
    this.x = this.canvas.width;
  }
};

Enemy.prototype.move = function() {
  this.x = this.x + this.direction * this.velocity;
};

Enemy.prototype.draw = function() {
  this.ctx.fillStyle = this.color;
  this.ctx.fillRect(this.x, this.y, this.width, this.height);
};