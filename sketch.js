
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1600,600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
ground=new Ground(width/2,570,width,20);
paper=new Paper(200,550,70,70);
dustbin=new Dustbin(1100,450,230,100);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
 
  paper.display();
  ground.display();
  dustbin.display();
  
  drawSprites();
 
}
function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:750,y:-755})
	}
}


