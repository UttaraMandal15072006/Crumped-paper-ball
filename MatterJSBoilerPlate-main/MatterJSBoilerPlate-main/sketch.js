
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball, w1, w2, w3, w4, w5, w6, w7;
var ball_opt;

function setup() {
	createCanvas(windowWidth,windowHeight);


	engine = Engine.create();
	world = engine.world;
	w1=new Ground(width/2,height/1.5,width,30);
	w2=new Ground(width/1.1,height/1.70,20,68);
	w3=new Ground(width/1.3,height/1.70,20,68);
	w4=new Ground(width/2,height/36,width,30);
	w5=new Ground(width/2,height/1.03,width,30);
	w6= new Ground(width/75,height/2,30,height);
	w7=new Ground(width/1.02,height/2,30,height);
	//Create the Bodies Here.
    ball_opt=
	{
		restitution:0.5,
		frictionAir:0.01,
		density:1.2,
	}
	ball=Bodies.circle(width/3,height/5,20,ball_opt);
	World.add(world,ball);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  ellipseMode(RADIUS);
  background("navy");
  stroke("purple");
  strokeWeight(3);
  fill("violet");
  var pos=ball.position;
  ellipse(pos.x,pos.y,20);
  w1.ground();
  w2.ground();
  w3.ground();
  w4.ground();
  w5.ground();
  w6.ground();
  w7.ground();

  console.log(mouseX);
  
	Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0});
	if(keyCode==UP_ARROW)
 	{
	 	Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.1});
 	}
  
  //h();
  drawSprites();
  textSize(20);
  stroke("skyblue");
  fill("crimson");
  text("Press the up arrow to put the garbage into the dustbin",width/3,height/2);
  //Engine.update(engine);
}

/*function h()
{
	if(keyCode==RIGHT_ARROW)
 {
	Matter.Body.applyForce(ball,{x:0,y:0},{x:0.1,y:0});
 }
 if(keyCode==LEFT_ARROW)
 {
	Matter.Body.applyForce(ball,{x:0,y:0},{x:-0.1,y:0});
 }
 if(keyCode==UP_ARROW)
 {
	Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.1});
 }
}*/



