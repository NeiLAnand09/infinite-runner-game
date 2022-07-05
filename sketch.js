  
var bomb, bombImg, bombgroup;
var background, backgroundImg;
var ghost, ghostImg;
var invisibleBlockGroup, invisibleBlock;
var gameState = "play"
var invisibleground;

function preload(){
bombImg = loadImage("bomb.png")
backgroundImg = loadImage("background.png")
ghostImg = loadImage("ghost.png")
}

function setup() {
  createCanvas(600,600);
  background = createSprite(300,300);
  background.addImage("background",backgroundImg);
  background.velocityY = 1;
  

  invisibleBlockGroup = new Group();
  
  ghost = createSprite(200,200,50,50);
  ghost.scale = 0.3;
  ghost.addImage("ghost", ghostImg);

  
} 




function draw() {
 
  
  if (gameState === "play") {
    
    if(keyDown("left_arrow")){
 ghost.x=ghost.x -3 
    
    }
    if(keyDown("right_arrow")){ 
  ghost.x=ghost.x +3
    
      
    }
    if(keyDown("space")){
  ghost.velocityY=-10
   
      
      
    }
  
  ghost.velocityY = ghost.velocityY + 0.8;
  
   
     
    if(background.y > 400){
      background.y=300
    }
      

  

if(invisibleBlockGroup.isTouching(ghost) || ghost.y>600){
  ghost.destroy()
  gameState="end"
}
  
  drawSprites();
}
  if (gameState === "end"){
    stroke("red");
    fill("red");
    textSize(60);
    text("Game Over!!!!", 100,280)
  }
}

function spawnbomb()
 {
  
  if (frameCount % 240 === 0) {
    
    var bomb = createSprite(200,10);
    var invisibleBlock = createSprite(200,15);
    invisibleBlock.width = bomb.width;
    invisibleBlock.height = 2;
  
    bomb.x=Math.round(random(120,400))
    
    invisibleBlock.x=bomb.x
    
    bomb.addImage("bomb.png");
   
    
    bomb.velocityY = 1;
    invisibleBlock.velocityY = 1;


     
      bomb.lifetime=800
      invisibleBlock.lifetime=800

    
   
    invisibleBlock.debug=true
    invisibleBlockGroup.add(invisibleBlock)
  }
}

