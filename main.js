'use strict';

function main() {
  
  var mainElement = document.querySelector('#site-main')

  function buildDom(html) {
    mainElement.innerHTML = html;
    return mainElement;
  };

  function createSplashScreen() {
    var splasScreen = buildDom(`
      <section> 
        <h1>Jump, Fly & Survive</h1>
        <button>Start</button>
      </section>
    `);
  };
  
  function createGameScreen() {
    var gameScreen = buildDom(`
      <section>
        <canvas width="600" height="750"></canvas>
      </section>
    `);
  };

  function createGameOverScreen() {
    var gameScreen = buildDom(`
      <section>
        <h1>Game Over</h1>
        <button>Restart</button>
        <button>Menu</button>
      </section>
    `)
  }

};

window.addEventListener('load', main);