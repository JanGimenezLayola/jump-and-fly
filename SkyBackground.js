'use strict';
function SkyBackground(canvas) {
  this.canvas = canvas;
  this.ctx = this.canvas.getContext('2d');
  this.x = 0;
  this.y = 0;
  this.velocity = 3;
  this.skySlide = -5;
  this.color = "blue";
  this.width = this.canvas.width;
  this.height = 2000;
}

SkyBackground.prototype.move = function() {
  this.y = this.y + this.skySlide;
};

SkyBackground.prototype.draw = function() {
  console.log('skyback draw')
  this.ctx.fillStyle = this.color;
  this.ctx.fillRect(this.x, this.y, this.width, this.height);
};