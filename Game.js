'use strict';

function Game(canvas) {
  this.skydiver = null;
  this.enemy = [];
  this.isGameOver = false;
  this.canvas = canvas;
  this.ctx = this.canvas.getContext('2d');
  this.onGameOver = null;
}

Game.prototype.startGame = function() {

  var loop = () => {
    console.log('HEY')
  };

loop();


Game.prototype.update = function() {

};

Game.prototype.clear = function() {

};

Game.prototype.draw = function() {

};

};
