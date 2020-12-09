var paper;
var ground;
var box1,box2,box3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper = new Paper(200,400,50,50)
	ground = new Ground(800,650,1600,20)
	box1=	 new Dustbin(1400, 630, 200,20);
	box2= new Dustbin(1300, 590, 20,100);
	box3= new Dustbin(1500, 590, 20,100);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  paper.display();
  ground.display();

  box1.display();
  box2.display();
  box3.display();

  if (keyCode===UP_ARROW){
	Matter.Body.applyForce(paper.body,paper.body.position,{x:5,y:-6})

  }

  drawSprites();
 
}



