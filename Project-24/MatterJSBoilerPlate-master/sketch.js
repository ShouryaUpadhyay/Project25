const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground, dustbin1,dustbin2,dustbin3,paper1;


function setup() {
	createCanvas(800, 400);

	engine = Engine.create();
	world = engine.world;



	//Create the Bodies Here.
ground =new Ground(400,380,800,20)
paper1 =new Paper(100,360,20,20)
dustbin1 =new Dustbin(700,360,80,20)
dustbin2= new Dustbin(780,360,20,80)
dustbin3= new Dustbin(620,360,20,80)

	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  
  ground.display();
dustbin1.display();
 paper1.display();

}

function keyPressed(){
  if(keyCode === UP_ARROW){

    Matter.Body.applyForce(paper1.body,paper1.body.position,{x:85,y:85})
  } 
}


