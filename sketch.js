var bow , arrow,  background;
var bowImage, arrowImage, green_balloonImage, red_balloonImage, pink_balloonImage ,blue_balloonImage, backgroundImage;
var score = 0

function preload(){
  
  backgroundImage = loadImage("background0.png");
  arrowImage = loadImage("arrow0.png");
  bowImage = loadImage("bow0.png");
  red_balloonImage = loadImage("red_balloon0.png");
   pink_balloonImage = loadImage("pink_balloon0.png")

}





function setup() {
  createCanvas(400, 400);
  
  //creating background
  scene = createSprite(0,0,400,400);
  scene.addImage(backgroundImage);
  scene.scale = 2.5
  
  // creating bow to shoot arrow
  bow = createSprite(380,220,20,50);
  bow.addImage(bowImage); 
  bow.scale = 1;

  
  
}

function draw() {
 background("black");
  // moving ground
    scene.velocityX = -3 

    if (scene.x < 0){
      scene.x = scene.width/2;
    }

    textSize(20)
    text("Score:"+score,300,80)
  
  //moving bow
  bow.y = World.mouseY

   if(bow.y < 40){
      bow.y = 40
   }

   if(bow.y > 360){
       bow.y = 360
   }
  
   // release arrow when space key is pressed
  if (keyDown("space")) {
    createArrow();
    
  }
  
  //creating continous balloons
  var select_balloon = Math.round(random(1,1));
  
  if (World.frameCount % 100 == 0) {
    if (select_balloon == 1) {
      redBalloon();
    }
  }
   
  
  drawSprites();
}



 function createArrow() {
  var arrow= createSprite(100, 100, 60, 10);
  arrow.addImage(arrowImage);
  arrow.x = 360;
  arrow.y = bow.y
  arrow.velocityX = -4;
  arrow.lifetime = 100;
  arrow.scale = 0.3;
}


 function redBalloon() {
  var redBalloon = createSprite(200,50,10,10)
  redBalloon.addImage(red_balloonImage);
  var rand = Math.round(random(10,260))
  redBalloon.velocityY = 3;
  redBalloon.lifetime = 150;
  redBalloon.scale = 0.1;

  }

 //function blueBalloon() {

  
  
 //}

//function greenBalloon() {
  
//}

function pinkBalloon() {
  var pink_balloon = createSprite(200,120,10,10)
 pink_balloon.addImage(pink_balloonImage)
 var rand = Math.round(random(10,260))
 pink_balloon.velocityY = 3




}

 

 

 

