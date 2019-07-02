'use strict';

function Skydiver(canvas) {
  this.canvas = canvas; 
  this.width = 40;
  this.height = 40;
  this.ctx = canvas.getContext('2d');
  this.x = (this.canvas.width / 2) - this.width / 2;
  this.y = 75; 
  this.direction = 0;
  this.velocity = 3;
  this.color = "blue";
 
};

Skydiver.prototype.setDirection = function(newDirection) {
  console.log('setDirection')
  this.direction = newDirection;
};

Skydiver.prototype.move = function() {
  this.x = this.x + this.direction * this.velocity;
};

Skydiver.prototype.draw = function() {
  this.ctx.fillStyle = this.color;
  this.ctx.fillRect(this.x, this.y, this.width, this.height);
};



