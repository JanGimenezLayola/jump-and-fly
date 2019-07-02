'use strict';

function Game(canvas) {
  this.skydiver = null;
  this.enemies = [];
  this.isGameOver = false;null
  this.canvas = canvas;
  this.ctx = this.canvas.getContext('2d');
  this.onGameOver = null;
}

Game.prototype.startGame = function() {

  this.skydiver = new Skydiver(this.canvas)

  var loop = () => {
      
    this.update();
    this.draw();

  };

loop();

};

Game.prototype.update = function() {
  this.skydiver.move();
};

Game.prototype.clear = function() {
  this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
};

Game.prototype.draw = function() {
  console.log('hey')
  this.skydiver.draw();
};
