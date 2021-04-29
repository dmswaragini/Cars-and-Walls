var bullet;
var wall;
var speed;
var wieght;
var deformition;
var thickness;
function setup() {
  
  createCanvas(1600,400);
  bullet=createSprite(50, 200, 50, 10);
  bullet.shapeColor=("white");
  wall=createSprite(1200,200,thickness,height/2);
  wall.shapeColor=(80,80,80);
  speed=random(223,321);
  bullet.velocityX=speed;
  wieght=random(30,52);
  thickness=random(22,83);
}

function draw() {
  background("grey");
  if(wall.x-bullet.x < (bullet.width/2+wall.width/2)){
    bullet.velocityX=0
deformition=0.5*wieght*speed*speed/2250
if(deformition>180){
  bullet.shapeColor="red";
if(deformition<180 && deformition<100){
  bullet.shapeColor="yellow";
}
if(deformition<100){
  bullet.shapeColor=color(0,255,0);
}
}
  }
  
  drawSprites();
}
function hasCollided(bullet,wall)
{
bulletRightEdge=lbullet.x+lbullet.width;
wallLeftEdge=lwall.x
if(bulletRightEdge>=wallLeftEdge)
{
return true
}
return false
}
bullet.velocityX = 0;
var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);
if(damage>10){
  wall,shapeColor=color(255,0,0);
}
if(damage<10){
  wall.shapeColor=color(0,255,0);
}
