'use strict';
function Enemy(canvas) {
  this.canvas = canvas;
  this.ctx = this.canvas.getContext('2d');
  this.x = null;
  this.y = null;
  this.velocity = 3;
  this.skySlide = -7;
  this.color = "red";
  this.width = canvas.width;
  this.height = canvas.height;
}

