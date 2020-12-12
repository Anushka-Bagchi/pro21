var bullet,wall;
var speed,weight,thickness;
var damage;

function setup() {
  createCanvas(1600,400);

  speed=random(223,321);
  weight=random(30,52);
  thickness=random(22,83);

  bullet=createSprite(50, 200, 30,5);
  bullet.shapeColor="white";
  wall=createSprite(1200, 200, thickness, height/2);
  wall.shapeColor=color(80,80,80);

  bullet.velocityX=speed;

  

}

function draw() {
  background(0);  
  if(collided(bullet,wall)){

    bullet.velocityX=0;
    damage=(0.5*weight*speed*speed)/(thickness*thickness*thickness);

    if(damage<10){   
      wall.shapeColor="green";
    }
    if(damage>10){  
      wall.shapeColor="red";
    }
  }
  
  drawSprites();
}
function collided(bullet1,wall1){

  if(wall1.x-bullet1.x<=wall1.width/2+bullet.width/2){
    return true;
  }
  return false;

}