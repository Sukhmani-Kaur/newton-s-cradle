
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

	g1= new roof(400,100,400,50);

	b1= new bob(300,500,50);
	b2= new bob(350,500,50);
	b3= new bob(400,500,50);
	b4= new bob(450,500,50);
	b5= new bob(500,500,50);

	r1= new rope(b1.body,g1.body,-50*2,0);
	r2= new rope(b2.body,g1.body,-25*2,0);
	r3= new rope(b3.body,g1.body,0*2,0);
	r4= new rope(b4.body,g1.body,25*2,0);
	r5= new rope(b5.body,g1.body,50*2,0);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(100);
  //Engine.update(engine);

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
		Matter.Body.applyForce(b1.body,b1.body.position,{x:-100,y:-100});
	}
}



