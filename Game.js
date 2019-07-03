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
  this.skyBackground = new SkyBackground(this.canvas)

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
    this.checkCollisions();
    
    requestAnimationFrame(loop)
  };

loop();

};

Game.prototype.update = function() {
  this.skyBackground.move()
  this.skydiver.move();
  this.enemies.forEach(function(enemy) {
    enemy.move();
  });
};

Game.prototype.clear = function() {
  this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
};

Game.prototype.draw = function() {
  this.skyBackground.draw()
  this.skydiver.draw();
  this.enemies.forEach(function(enemy) {
    enemy.draw();
  });    

};

Game.prototype.checkCollisions = function() {
  this.enemies.forEach((enemy, index) => {
    var rightLeft = this.skydiver.x + this.skydiver.width >= enemy.x;
    var leftRight = this.skydiver.x <= enemy.x + enemy.width;
    var bottomTop = this.skydiver.y + this.skydiver.height >= enemy.y;
    var Topbottom = this.skydiver.y <= enemy.y + enemy.height;

    if (rightLeft && leftRight && bottomTop && Topbottom) {
      this.enemies.splice(index, 1);
      this.player.lives --;
      if(this.player.lives === 0) {
        this.isGameOver = true; 
      };
    };
  });
 };
