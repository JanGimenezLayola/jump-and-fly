# jump-fly-survive

## Description
Hi! Have you ever jumped from an airplane? In this game you will have to think like a skydiver and dodge the air traffic of birds, planes and other. Move the player with the arrows keys and stay alive as long as possible. 

## MVP (DOM - CANVAS)
The game should have 3 screens. The splashScreen (with a start button), the gameScreen and the gameoverScreen (with restart and menu buttons). The skydiver should move to left and right and the backgroundSky moves up to create the movement sensation. If the skydiver colisionate with an enemy 3 times the game should end and you're redirected to the gameoverScreen.

## Backlog
- Show score in gameScreen and GameOver/Win Screens (time alive)
- Show lives in gameScreen
- Create diferents enemies skins --> bird/airplane/...
- skydive to parachute when player win
- Make responsive
- Mobile Play
- Music
- Sound effects

## Data structure
### Game
#### Classes 
- this.skydiver
- this.enemy
- this.isGameOver
#### Methods
- this.update()
- this.startGame()
- this.checkColision()
- this.checkBorders()
- this.clear()

### Skydiver
#### Classes 
- this.x
- this.y
- this.direction
- this.color
- this.width
- this.height
#### Methods
- this.move()
- this.draw()
- this.updateLives()

### Enemy 
#### Classes 
- this.x
- this.y
- this.velocity
- this.direction
- this.color
- this.width
- this.height
#### Methods
- this.move()
- this.eliminateEnemy()
- this.draw()

### SkyBackground 
#### Classes 
- this.velocity
- this.direction
- this.color
- this.width
- this.height
#### Methods
- this.move()
- this.draw()

### SkyBackgroun
 - Enemies clone


## States y States Transitions
- splashScreen (button start --> instructionScreen)
- instructionScreen (button jump --> gameScreen)
- gameScreen (when gameoverCondition === true --> gameoverScreen)
- gameoverScreen (button restart --> gameScreen // button menu --> splashScreen)


## Task
- Create project files
  - index.html
  - style.css
  - Game.js
  - Skydiver.js
  - Enemy.js
  - SkyBackground.js
- Copy boilerplates
- Set up git & github
- create screens (buldDom)
  - splashScreen
  - gameScreen
  - gameOverScreen
- Code screen transitions
- Create Game loop
  - inicialize skydiver & enemies
  - Create Random Enemies (Math.random)
  - update, clear, draw, checkColisions & checkBorders
- Create skydiver
  - Propieties
  - Methods
- Create Enemy
  - Propieties
  - Methods
- Create skyBackground
  - Propieties
  - Methods
- Create colisions between skydiver & enemy
- Create two dificulties
- Game Over condition (3 lives)
- Game Win condition (50 seconds)

## Links


### Trello
[Link url](https://trello.com/b/rU0lcHdn)


### GitHub
URls for the project repo and deploy
[Link Repo](https://github.com/JanGimenezLayola/jump-and-fly)
[Link Deploy](https://jangimenezlayola.github.io/jump-fly-survive/)


### Slides
URls for the project presentation 
[Link](https://docs.google.com/presentation/d/1YRPMV9xQFFX52llpClxsIa5pXln-WHnRVKY-KfacYpo/edit?usp=sharing)


------------------------------------------------Created by Jan Gimenez Layola-----------------------------------------------
