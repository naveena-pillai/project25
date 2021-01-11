
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground, paper, box1, box2, box3;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(400,680,800,20);
	paper = new Paper(100,660);

	box1 = new Dustbin(600,580,150,200);
	//box2 = new Dustbin(525,620,20,100);
	//box3 = new Dustbin(675,620,20,100);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
 
  paper.display();
  ground.display();
  box1.display();
  //box2.display();
  //box3.display();

  drawSprites();
 
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(paper.body, paper.body.position,{x:500,y:-500});
	}
}


