'use strict';
function SkyBackground(canvas) {
  this.canvas = canvas;
  this.ctx = this.canvas.getContext('2d');
  this.x = 0;
  this.y = 0;
  this.velocity = 3;
  this.skySlide = 0;
  this.color = "blue";
  this.width = this.canvas.width;
  this.height = 12000;
  this.img = new Image();
  this.img.src = "./images/background.png"
}

SkyBackground.prototype.move = function() {
  this.y = this.y + this.skySlide;
};

SkyBackground.prototype.draw = function() {
  var ctx = this.ctx;
  ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
};

SkyBackground.prototype.setStart = function(five) {
  this.skySlide = five;
};