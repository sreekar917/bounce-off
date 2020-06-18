
var moving,fix
function setup() {
  createCanvas(800,400);
  
  //fix=createSprite(400, 200, 50, 50);
//ball1=createSprite(400,300,50,50)
ball2=createSprite(400,100,50,50)
moving=createSprite(400,300,50,50)
moving.velocityY=-3
  //moving.velocityX=+10
  //fix.velocityY=-5
  //fix.velocityX=+5
 // ball1.velocityY=-9
 // ball1.velocityX=+9
  ball2.velocityY=+3
 // ball2.velocityX=+8
 
}

function draw() {
  
  background("blue");  
  //moving.x=mouseX
  //moving.y=mouseY
  
 
 
istouching(moving,ball2);
//istouching(moving,ball1);
//istouching(moving,fix);
  drawSprites();
}
function istouching(object1,object2){
  if(object1.x-object2.x<object1.width/2+object2.width/2
    && object2.x-object1.x<object1.width/2+object2.width/2
    && object1.y-object2.y<object1.height/2+object2.height/2
    && object2.y-object1.y<object2.height/2+object1.height/2){
      object1.shapeColor="black"
      object2.shapeColor="red"
      object1.velocityY=object1.velocityY*(-1);
      object2.velocityY=object2.velocityY*(-1);

  }else{
    object1.shapeColor="green"
    object2.shapeColor="green"
  }
  
}
