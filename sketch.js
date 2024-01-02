//Initialization of the variables
var x=200 // x cordinate of ball
var y=-20 // y cordinate of ball
var speed=2 //speed of the ball 
var screen=0 // screen counter to move between different screens
var score=0 // score counter

//Initializing the Sprites of the game
let logo,ball,basket;
function preload() {
  logo = loadImage('assets/logo.png');
  ball = loadImage('assets/ball.png');
  basket = loadImage('assets/basket.png');
}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  if(screen == 0){
    landingPage();
  }else if(screen==1){
    startGame();
  }else if(screen==2){
    endGame();
  }
}

function landingPage(){
  background(255, 165, 0)
  fill(255)
  textAlign(CENTER)
  textStyle(BOLD);
  text('WELCOME CATCHING GAME', width/2, (height/2)-100)
  image(logo, (width/2)-100, (height/2)-80, 200, 200)
  textStyle(ITALIC);
  text('click to start', width/2, (height/2)+150);
  textSize(20)
  resetGame()
}

function startGame(){
  
  background(255, 165, 0)
  text("score = " + score, 50,20)
  image(ball,x,y,40,40)
  image(basket,mouseX,height-50,80,60)
  y+=speed
  
  if(y>height){
    screen=2
  }
  
  if(y>height-50 && x>mouseX-30 && x<mouseX+70){
  	y=-20
    speed+=0.2
    score+= 1
  }
  
  if(y==-20){
  	pickRandom();
  }
}

function pickRandom(){
  x = random(40,width-40)
}

function endGame(){
  background(255, 165, 0)
  textAlign(CENTER);
  text('GAME OVER', width / 2, height / 2)
  text("SCORE = " + score, width / 2, height / 2 + 20)
  text('click to play again', width / 2, height / 2 + 40);
}

function mousePressed(){
  if(screen==0){
    screen=1
  }else if(screen==2){
    screen=0;
  }
}

function resetGame(){
  y=-20
  speed=2
  score=0
}