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
};

Skydiver.prototype.setDirection = function(newDirection) {
  this.direction = newDirection;
};

Skydiver.prototype.move = function() {
  this.x = this.x + this.direction * this.velocity;
};

Skydiver.prototype.draw = function() {
  this.ctx.fillStyle = this.color;
  this.ctx.fillRect(this.x, this.y, this.width, this.height);
};



