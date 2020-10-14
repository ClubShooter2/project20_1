var wall, thickness;
var bullet, speed, weight;

function setup() {
  createCanvas(1600,400);
  thickness = random(22,83);
  speed = random(223,321);
  weight = random(30,52);
bullet = createSprite(400,200,50,50);
bullet.shapeColor = "green";
bullet.velocityX = speed;
wall = createSprite(1200,200,thickness,height/2);
wall.shapeColor = "green";
}

function draw() {
  background("black");  

  
  if((wall.x - bullet.x) < (wall.width/2+bullet.width/2)){
    
  
      var damage = 0.5 * weight * speed * speed/(thickness*thickness*thickness);
      if(damage === 3.68){
        bullet.shapeColor = "green";
      }
      if(damage === 12.43){
        bullet.shapeColor = "red";
        
      }
     if(damage<10){
      bullet.velocityX = 0; 
     }
    }
       drawSprites();
}