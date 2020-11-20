const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var border1 , border2 , border3 , border4;

var divisionHeight = 300;

var particles = [];
var plinkos = [];
var divisions = [];

function setup() {
  createCanvas(480,800);

  engine = Matter.Engine.create();
    world = engine.world;

  border1 = new Ground(240 , 795 , 480 , 10 , "white");
  border2 = new Ground(475 , 400 , 10 , 800 , "brown");
  border3 = new Ground(240 , 5 , 480 , 10 , "brown");
  border4 = new Ground(5 , 400 , 10 , 800 , "brown");
  
  for(var k = 0; k <=width; k = k+80){

    divisions.push(new Divisions(k , height-divisionHeight/2 , 10 , divisionHeight));

  }

  for(var k = 40; k <=width; k = k+50){

    plinkos.push(new Plinko(k , 75));

  }

  for(var k = 15; k <=width-10; k = k+50){

    plinkos.push(new Plinko(k , 175));

  }

  for(var k = 40; k <=width; k = k+50){

    plinkos.push(new Plinko(k , 275));

  }

  for(var k = 15; k <=width-10; k = k+50){

    plinkos.push(new Plinko(k , 375));

  }
  
  Engine.run(engine);
  
}

function draw() {
  background(0);
  
  Engine.update(engine);

  if(frameCount%60 === 0){

    particles.push(new Particles(random(width/2-220 , width/2+220) , 10 , 10));

  }

  border2.display();
  border4.display();
  border1.display();
  border3.display();

  for(var k = 0; k < divisions.length; k++){

    divisions[k].display();

  }

  for(var k = 0; k < plinkos.length; k++){

    plinkos[k].display();

  }

  for(var k = 0; k < particles.length; k++){

    particles[k].display();

  }

}