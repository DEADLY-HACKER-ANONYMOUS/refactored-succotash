/*function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255);
  drawSprites();
}*/


//var x = prompt("which class is this")

var car,wall,car1,wall1,speed1,weight1;
var deformation;

function setup() {
  createCanvas(windowWidth,windowHeight-150);
  speed = random(40,60);
  weight = random(1500,3000);
  
  wall = createSprite(windowWidth-200,windowHeight/2.6,10,200);
  car = createSprite(90,wall.y,30,30);
  car.velocityX=20

  deformation=(Math.round(weight*speed*speed)/45000)

  console.log(deformation)
var xy="orange"
  var xyz="green"
}

function draw() {
  background(0,0,0)
wall.shapeColor="white"
  if(keyDown("space")&&car.x-wall.x > -21){
    newcar();
  }
function newcar(){
  speed = random(40,60);
  weight = random(1500,3000);
  car.x=90;
  car.y=wall.y;
  wall.x=windowWidth-200;
  wall.y=windowHeight/2.6;
  car.velocityX=20;
  deformation=(Math.round(weight*speed*speed)/45000)
  }



  if(car.x-wall.x > -21&&deformation>180){
    car.velocityX=0
    car.shapeColor="red"

  }


  if(car.x-wall.x > -21&&deformation>80&&deformation<180){
    car.velocityX=0
    car.shapeColor="yellow"

  }


  if(car.x-wall.x > -21&&deformation<80){
    car.velocityX=0
    car.shapeColor="green"

  }

  drawSprites();
}
