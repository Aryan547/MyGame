class Game{
    constructor(){
    }
   
   start(){

    //bg = createSprite(200,180);
    //bg.addImage("background",bgImg);
    //bg.x = bg.width /2;
    //bg.scale = 3;

    invisibleGround = createSprite(200, 380, 400, 10);
    invisibleGround.visible = false

    player = createSprite(100, 300, 40, 80)
    player.addAnimation("running", playerImage)

    restart = createSprite(600, 200, 10, 10)
    restart.addImage("restart", restartImg);
    restart.visible = false;
    restart.scale = 0.11;

    gameover = createSprite(600, 160, 10, 10)
    gameover.addImage("gameOver", gameoverImg);
    gameover.visible = false;
    restart.scale = 0.11;

    obstacleGroup = new Group();
    coinGroup = new Group();
    cactusGroup = new Group();
  } 

  coinsSpawner(){

    if (frameCount % 350 === 0) {
        coin = createSprite(1180, 200, 10, 10);
        coin.addAnimation("coin", coinImg1)
        coin.scale = 0.2
        coin.y = Math.round(random(250,300));
        coin.velocityX = -3;
        coinGroup.add(coin);
    }   

  }

  cactus(){

    if(frameCount % 175 === 0){

      cactus = createSprite(1180, 330);
      cactus.addImage("image",ob2)
      cactus.scale = 1.5;
      cactus.velocityX = -3;
      cactusGroup.add(cactus);

    }
  }

  stone(){
     
       if(frameCount % 295 === 0){
        obstacle = createSprite(1180, 340);
        obstacle.addImage("obstacles", ob1)
        obstacle.scale = 0.7;
        obstacle.velocityX = -3;
        obstacleGroup.add(obstacle);

       }

  }

   play(){

       textSize(30)
       text("Score: "+ score, 1000,50);

       if(gameState === "play") {

        gameover.visible = false
        restart.visible = false
        //ground.velocityX = -4;

        if(coinGroup.isTouching(player)){
          score = score + 10;
          coinGroup.destroyEach();
        }

        if(keyDown("space")&& player.y >= 100) {
          player.velocityY = -12;
         }

         if(obstacleGroup.isTouching(player) || cactusGroup.isTouching(player)){
          gameState = "end"
        }

         player.velocityY = player.velocityY + 0.8;

         this.coinsSpawner();

         var r = Math.round(random(1,2))

         if(r === 1){
           this.stone()
         }
         else{
           this.cactus();
         }
         
       }

       if(gameState === "end"){
          obstacleGroup.setVelocityXEach(0);
          coinGroup.setVelocityXEach(0);
          cactusGroup.setVelocityXEach(0);
          player.velocityY = 0;
          restart.visible = true;
          gameover.visible = true;
          console.log("yes");
       }
        
       // if (ground.x < 0){
       //  ground.x = ground.width/2;
       // }
  
       player.collide(invisibleGround);

       drawSprites();
   }

}