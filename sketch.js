
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var block1
var block2
var block3
var ground
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
    var block1_options = {
		restitution:0.8,
		friction:0.02,
		frictionAir:0
	}
	var block2_options = {
		restitution:1,
		friction:0.01,
		frictionAir:0
	}
	var block3_options = {
		restitution:1,
		friction:0,
		frictionAir:0.06
	}
	engine = Engine.create();
	world = engine.world;

	//Crie os Corpos Aqui.
  block1 = Bodies.circle(245,40,70, block1_options);
  World.add(world,block1);
  block2 = Bodies.rectangle(191,328,50,70, block2_options);
  World.add(world,block2);
  block3 = Bodies.rectangle(50,5,100,100, block3_options);
  World.add(world,block3);
  ground = Bodies.rectangle(width/2,height-20,width,30,{isStatic: true})
  World.add(world,ground)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  ellipseMode(RADIUS);
  background(0);
  
  Engine.update(engine);

  rect(ground.position.x,ground.position.y,width,30);
  ellipse(block1.position.x,block1.position.y,70);
  rect(block2.position.x,block2.position.y,50,70);
  rect(block3.position.x,block3.position.y,100,100);


  drawSprites();
 
}



