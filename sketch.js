
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render=Matter.Render;
var world,engine,dustbin,dustbinobj,paperobject,groundobject;
function Preload(){
binImage=loadImage("dustbin.png");
}

function setup() {
	createCanvas(1600,700);


	engine = Engine.create();
	world = engine.world;
	dustbin=new Dustbin(1200,650)
	paperobject=new Paper(200,450,40)
	groundobject=new Ground(width/2,670,width,20)
	//Create the Bodies Here.
	var render = Render.create({ element: document.body, engine: engine, options: { width: 1200, height: 700, wireframes: false } });

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  dustbin.display();
  paperobject.display();
  groundobject.display();
  dustbinobj.display();
  paperobject.display();
  groundobject.display();
  dustbinobj.display();

  drawSprites();
 
}
function keyPressed() {
 if (keyCode === UP_ARROW) {
	 Matter.Body.applyForce(paperobject.body,paperobject.body.position,{x:85,y:-85}); } }


