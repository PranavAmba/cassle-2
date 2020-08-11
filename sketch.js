const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,box3,box4,box5,box6,box7;
var tri1,tri2;

function setup() {
  var canvas =createCanvas(800,400);

  engine = Engine.create();
  world = engine.world;

  box1 = new Box(305,250,50,300,PI/2);
  box2 = new Box(430,300,200,200,PI/2);
  box3 = new Box(550,250,50,300,PI/2);
  box4 = new Box(255,250,50,350,PI/2);
  box5 = new Box(600,250,50,350,PI/2);
  box6 = new Box(600,50,80,50,PI/2);
  box7 = new Box(255,50,80,50,PI/2);
 
  tri1 = new Triangle(10,10,20,20,20,20)
}

function draw() {
  background(0); 
  Engine.update(engine); 
 box1.display();
 box2.display();
 box3.display();
 box4.display();
 box5.display();
 box6.display();
 box7.display();
 tri1.display();
}