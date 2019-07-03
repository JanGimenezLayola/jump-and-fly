'use strict';

function Game(canvas) {
  this.skydiver = null;
  this.enemies = [];
  this.isGameOver = false;
  this.canvas = canvas;
  this.ctx = this.canvas.getContext('2d');
  this.onGameOver = null;
}

Game.prototype.startGame = function() {

  this.skydiver = new Skydiver(this.canvas)

  var loop = () => {
    

    if(Math.random() > 0.97) {
      var randomY = Math.random() * this.canvas.height - 125; 
      if(Math.random() >= 0.5) {
        var newEnemy = new Enemy(this.canvas,randomY, "left");
      } else {
        var newEnemy = new Enemy(this.canvas,randomY, "right");

      }
  
      this.enemies.push(newEnemy);
    };
    this.clear();
    this.update();
    this.draw();
    
    requestAnimationFrame(loop)
  };

loop();

};

Game.prototype.update = function() {
  this.skydiver.move();
  this.enemies.forEach(function(enemy) {
    enemy.move();
  });
};

Game.prototype.clear = function() {
  this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
};

Game.prototype.draw = function() {
  this.skydiver.draw();
  this.enemies.forEach(function(enemy) {
    enemy.draw();
  });
};
