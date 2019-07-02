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
    var GameScreen = buildDom(`
      <section>
        <canvas width="600" height="750"></canvas>
      </section>
    `);
  };

  createGameScreen();

};

window.addEventListener('load', main);