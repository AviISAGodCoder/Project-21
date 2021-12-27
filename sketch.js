
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world; 


var ball;
var groundObj;
var leftSide;
var rightSide;


function setup() {
	createCanvas(windowWidth, windowHeight);
     rectMode(CENTER);
	engine = Engine.create();
	world = engine.world;

	groundObj=new Ground(width/2,670,width,20);
	leftSide=new Ground(1100,600,20,120);
	rightSide=new Ground(1350,600,20,120);


	var ball_options=
	{
	  isStatic:false,
	  restitution: 0.30,
	  friction:0,
	  density:1.2
	}


	

	//Create the Bodies Here.
	ball = Bodies.circle(200,100,20,ball_options);
	World.add(world,ball);

	



	Engine.run(engine);

	ellipseMode(RADIUS);
}
function keyPressed()
{
	if(keyCode === UP_ARROW) 
	{
		Matter.Body.applyForce(ball,ball.position,{x:85,y:-85});
	}
}


function draw() {
rectMode(CENTER);
	
  background(51);

  ellipse(ball.position.x,ball.position.y,20,20);

  Engine.update(engine);


 

  groundObj.display();
  leftSide.display();
  rightSide.display();

  drawSprites();
 
}



