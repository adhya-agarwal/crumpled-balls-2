
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball1;
var ground;
var box1,box2,box3;

function setup() {
	var canvas = createCanvas(1200,600);
	engine = Engine.create();
	world = engine.world;

	ball1=new Ball(200,313,70);
	ground = new Ground(600,380,1200,10);
	box1=new Box(850,320,7,80);
	box2=new Box(1020,320,7,95);
	box3=new Box(800,180,250,200);
	
	
	

	Engine.run(engine);
  
}


function draw() {
  background("white");
  Engine.update(engine);
  ball1.display();
  ground.display();
  //box1.display();
  //box2.display();
  box3.display();
  
  drawSprites();
 
}

function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.setStatic(ball1.body,false);
		Matter.Body.applyForce(ball1.body,ball1.body.position,{x:90,y:-80})
	}
}


