var movingRect;
var fixedRect;
var ball1;
var ball2;
var ball3;
var ball4;
function setup() {
  createCanvas(1000,800);
  
  
ball1=createSprite(800,200,50,50);
ball2=createSprite(600,200,50,50);
ball1.velocityX=-6
ball2.velocityX=6;
ball3=createSprite(500,10,50,50);
ball4=createSprite(500,750,50,50);
ball3.velocityY=6;
ball4.velocityY=-6;
ball4.shapeColor="yellow";
ball1.shapeColor="white";
ball2.shapeColor="blue";
  movingRect=createSprite(200,400,80,20);
  movingRect.shapeColor="red";
  fixedRect=createSprite(400,400,80,20);
  fixedRect.shapeColor="red";
console.log(fixedRect.width/2+movingRect.width/2);
}

function draw() {
  background(0);  

  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;
//console.log(fixedRect.x-movingRect.x)
if(fixedRect.width/2+movingRect.width/2>=fixedRect.x-movingRect.x && 
  fixedRect.width/2+movingRect.width/2  >=movingRect.x-fixedRect.x&&
  fixedRect.height/2+movingRect.height/2>=fixedRect.y-movingRect.y&&
  fixedRect.height/2+movingRect.height/2>=movingRect.y-fixedRect.y
  ){
fixedRect.shapeColor="blue";
movingRect.shapeColor="blue";

}else{
  fixedRect.shapeColor="green";
  movingRect.shapeColor="green";

}
if(ball1.width/2+ball2.width/2>=ball1.x-ball2.x&&
  ball1.width/2+ball2.width/2>=ball2.x-ball1.x){
    ball1.velocityX=ball1.velocityX*(-1);
    ball2.velocityX=ball2.velocityX*(-1);
  }

  if(ball3.height/2+ball4.height/2>=ball3.y-ball4.y&&
    ball3.height/2+ball4.height/2>=ball4.y-ball3.y ){
    ball3.velocityY=ball3.velocityY*(-1);
    ball4.velocityY=ball4.velocityY*(-1);
  }
  drawSprites();
}