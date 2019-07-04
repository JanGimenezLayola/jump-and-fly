'use strict';

function Game(canvas) {
  this.skydiver = null;
  this.enemies = [];
  this.isGameOver = false;
  this.canvas = canvas;
  this.ctx = this.canvas.getContext('2d');
  this.onGameOver = false;
  this.startedDrop = false;
  this.dificulty = 1;
  this.counter = 0;
  this.score = 0;
}

Game.prototype.startGame = function() {

  this.skydiver = new Skydiver(this.canvas)
  this.skyBackground = new SkyBackground(this.canvas)
  this.enemy = new Enemy(this.canvas);



  var loop = () => {
    this.counter++;
    if(Math.random() > this.dificulty) {
      var randomY = Math.random() * this.canvas.height - 125; 
      if(Math.random() >= 0.5) {
        var newEnemy = new Enemy(this.canvas,randomY, "right");
      } else {
        var newEnemy = new Enemy(this.canvas,randomY, "left");
      }
      this.enemies.push(newEnemy);
    };
    this.clear();
    this.update();
    this.draw();
    this.checkCollisions();
    if(this.startedDrop){
      if(this.counter % 60 === 0) {
        this.score++;
        console.log(this.score);
      }    
      
      this.enemies.forEach((enemy)=> enemy.respawn());
    }
    if(!this.isGameOver) {
      requestAnimationFrame(loop);
    } else {
      this.onGameOver();
    }
  };

loop();
};

Game.prototype.update = function() {
  this.skyBackground.move()
  this.skydiver.move();
  this.enemies.forEach((enemy, index) =>{
    enemy.move();
    if(enemy.x < -80 || enemy.x > this.canvas.width){
      this.enemies.splice(index, 1);
    }
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
      this.skydiver.lives --;
      if(this.skydiver.lives === 0) {
        this.isGameOver = true; 
      };
    };
  });
 };

 Game.prototype.gameOverCallback = function(callback) {
  this.onGameOver = callback;
};
Game.prototype.enemiesAppear = function() {
  this.startedDrop = true;
  this.dificulty = 0.975;
  console.log(this.dificulty)
};

Game.prototype.enemiesAppearHardcore = function() {
  this.startedDrop = true;
  this.dificulty = 0.928;
  console.log(this.dificulty)
};

Game.prototype.scoreFunction = function() {
  this.score = this.score + 1;
  console.log(this.score);
}