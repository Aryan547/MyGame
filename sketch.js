var playerImage, player;
var game;
var coin, coinImg1, coinImg2, coinImg3, coinImg4, coinGroup;
var obstacle, ob1, ob2, ob3, obstacleGroup;
var bgImg, bg, invisibleGround;
var restartImg, restart, gameoverImg, gameover;
var score = 0;
var gameState = "play";
var cactus, cactusGroup;
  
function preload(){

  bgImg = loadImage("images/bg.png");
  playerImage = loadAnimation("images/Photo1.png", "images/Photo2.png", "images/Photo1.png");

  ob1 = loadImage("images/ob1.png");
  ob2 = loadImage("images/ob2.png");

  coinImg1 = loadAnimation("images/coin1.png", "images/coin2.png", "images/coin3.png", "images/coin4.png");
 
  restartImg = loadImage("images/restart.png")
  gameoverImg = loadImage("images/gameOver.png")
  
  //coinImg2 = loadImage("images/coin2.png")
  //coinImg3 = loadImage("images/coin3.png")
  //coinImg4 = loadImage("images/coin4.png")

}

function setup(){
  var canvas = createCanvas(1200,400);

  game = new Game();
  game.start();
}

function draw(){
  
    background(bgImg);
    game.play();
}