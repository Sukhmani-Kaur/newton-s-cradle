
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	g1= new roof(400,200,400,50);

	b1= new bob(400,500);
	b2= new bob(340,500);
	b3= new bob(310,500);
	b4= new bob(440,500);
	b5= new bob(480,500);

	r1= new rope(b1.body,g1.body,b1.radius*0,0);
	r2= new rope(b2.body,g1.body,b2.radius*-0.6,0);
	r3= new rope(b3.body,g1.body,b3.radius*-1.1,0);
	r4= new rope(b4.body,g1.body,b4.radius*0.6,0);
	r5= new rope(b5.body,g1.body,b5.radius*1.2,0);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  g1.display();

  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();

  r1.display();
  r2.display();
  r3.display();
  r4.display();
  r5.display();

  keypressed();
  
  drawSprites();
 
}

function keypressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(b5.body,b5.body.position,{x:5,y:5});
	}
}



