var trex, trex_running, edges;
var groundImage;
var ground, ig
function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  groundImage = loadImage("ground2.png")
}

function setup(){
  createCanvas(600,200);
  
  // creating trex
  trex = createSprite(50,160,20,50);
  trex.addAnimation("running", trex_running);
  edges = createEdgeSprites();
  
  //adding scale and position to trex
  trex.scale = 0.5;
  trex.x = 50  
  ground=createSprite(200,185,400,10)  
  ground.velocityX= -4
  ground.addImage(groundImage)
  ig=createSprite(200,195,400,10)
  ig.visible=false
}


function draw(){
  //set background color 
  background("white");
  
  //logging the y position of the trex
  console.log(trex.y)
  
  //jump when space key is pressed
  if(keyDown("space")&&trex.y>=150){
    trex.velocityY = -10;
  }
  if(ground.x < 30){
    ground.x=ground.width/2
  }
  trex.velocityY = trex.velocityY + 0.5;
  
  //stop trex from falling down
  trex.collide(ig) 
  drawSprites();
}