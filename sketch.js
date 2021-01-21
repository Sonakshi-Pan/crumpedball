
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var box1,box2,box3;
var paper;


function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

  //Create the Bodies Here.
  Engine.run(engine);
  paper = new Paper(100,600,10);
	ground = new Ground(400,680,800,20);

 
  box1 = new Box(550,620,20,100);
  box2 = new Box(610,660,100,20);
  box3 = new Box(670,620,20,100);

 // paper = new Paper();

}


function draw() {
 // imageMode(CENTER);
  background(0);
  Engine.update(engine); 

  paper.display();

  ground.display();

  box1.display();
  box2.display();
  box3.display();
 

 //keyPressed();
}

function keyPressed(){
  if(keyCode === UP_ARROW){
    Matter.Body.applyForce(paper.body,paper.body.position,{x:15,y:-15})
     
  }
}

