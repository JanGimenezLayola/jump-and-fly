# jump-fly-survive

## Description
Hi! Have you ever jumped from an airplane? In this game you will have to think like a skydiver and dodge the air traffic of birds, planes and other. Move the player with the arrows keys and stay alive as long as possible. 

## MVP (DOM - CANVAS)
The game should have 3 screens. The splashScreen (with a start buttob), the gameScreen and the gameoverScreen (with restart and menu buttons). The skydiver should move to left and right and the backgroundSky have to move up to create the movement sensation. If the skydiver colisionate with and enemy 3 times the game should end and redirected to the gameoverScreen.

## Backlog
- Create instructions screen + add screen transition
- Create colisions with canvas
- Create score (time alive)
- Create diferents enemies skins --> bird/airplane/...

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
- this.checkBorders()
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

## States y States Transitions
- splashScreen (button start --> instructionScreen)
- instructionScreen (button jump --> gameScreen)
- gameScreen (when gameoverCondition === true --> gameoverScreen)
- gameoverScreen (button restart --> gameScreen // button menu --> splashScreen)


## Task
- Create project files
- Copy boilerplates
- Set up git & github
- create 3 screens (splashScreen, gameScreen & gameOverScreen)
- Code screen transitions
- Create Game loop
- Create skydiver
- Create Enemy
- Create skyBackground
- Create colisions between skydiver & enemy
- Game Over condition (3 lives)

## Links


### Trello
[Link url](https://trello.com/b/rU0lcHdn)


### Git
URls for the project repo and deploy
[Link Repo](https://github.com/JanGimenezLayola/jump-and-fly)
[Link Deploy](http://github.com)


### Slides
URls for the project presentation (slides)
[Link Slides.com](http://slides.com)
