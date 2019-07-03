'use strict';

function main() {
  
  var mainElement = document.querySelector('#site-main')

  function buildDom(html) {
    mainElement.innerHTML = html;
    return mainElement;
  };

  function createSplashScreen() {
    var splashScreen = buildDom(`
      <section> 
        <h1>Jump, Fly & Survive</h1>
        <button>Start</button>
      </section>
    `);

    var startButton = splashScreen.querySelector('button');
    startButton.addEventListener('click', createInstructionsScreen);

  };

  function createInstructionsScreen() {
    var instructionsScreen = buildDom(`
      <section>
        <h1>Instructions</h1>
        <li>  
          <ol>Press Junp button</ol>
          <ol>Move with left and right keys</ol>
        </li>
        <button>Next</button>
    `)

    var nextButton = instructionsScreen.querySelector('button');
    nextButton.addEventListener('click', createGameScreen)
  }
  
  function createGameScreen() {
    var gameScreen = buildDom(`
      <section>
        <button class="start">JUMP</button>
        <canvas width="600" height="750"></canvas>
      </section>
    `);

    var canvas = document.querySelector('canvas');
    var game = new Game(canvas);

    game.gameOverCallback(createGameOverScreen);

    game.startGame();

    document.addEventListener('keydown', function(event) {
      if(event.key === 'ArrowLeft') {
        game.skydiver.setDirection(-1);
      } else if (event.key === 'ArrowRight') {
        game.skydiver.setDirection(1);
      };

  });
  var button = document.querySelector('.start')
  button.addEventListener("click", function() {
  
    game.enemiesAppear();
    game.skyBackground.setStart(); 
  });
};

  function createGameOverScreen() {
    var gameOverScreen = buildDom(`
      <section>
        <h1>Game Over</h1>
        <button id="restart-button">Restart</button>
        <button id="menu-button">Menu</button>
      </section>
    `);  
    
    var restartButton = gameOverScreen.querySelector('#restart-button');
    restartButton.addEventListener('click', createGameScreen);

    var menuButton = gameOverScreen.querySelector('#menu-button');
    menuButton.addEventListener('click', createSplashScreen);

  };


  createSplashScreen();

};

window.addEventListener('load', main);