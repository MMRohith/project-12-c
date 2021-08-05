var garden,rabbit;
var gardenImg,rabbitImg
var apple,appleImg
var oleaf,leafImg



function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
leafImg = loadImage("orangeLeaf.png")
appleImg = loadImage("apple.png")
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);


//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}



function draw() {
  background(0);
  
  edges = createEdgeSprites();
  rabbit.collide(edges);


createFood();

  drawSprites();
}


function  createFood(){
if(frameCount%60===0){
apple=createSprite(random(0,400),10,10,10)
apple.addImage(appleImg)
apple.velocityY=4
apple.scale=0.08

oleaf=createSprite(random(0,400),10,10,10)
oleaf.addImage(leafImg)
oleaf.velocityY=4
oleaf.scale=0.08}








}







