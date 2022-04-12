
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var block1;
var block2;
var block3;
var ground;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	Engine.run(engine);
    
	world = engine.world;
	//Crie os Corpos Aqui.
''
 //fazendo bola	
	var propriedadesbola = {
	  restitution: 0.5,
	  friction: 0.02,
	  frictionAir: 0
	}
	block1 = Bodies.circle(220,10,20,propriedadesbola);
	
	World.add(world,block1);

 //fazendo quadrado
	var propriedadesquadrado = {
		restitution: 0.7,
		friction: 0.01,
		frictionAir: 0.01
	  }
	  block2 = Bodies.rectangle(110,50,50,50,propriedadesquadrado);
	  
	  World.add(world,block2);

 //fazendo retangulo   
	var propriedadesretangulo = {
		restitution: 0.01,
		friction: 1,
		frictionAir: 0.3
	  }
	  block3 = Bodies.rectangle(350,50,80,50,propriedadesretangulo);
	  
	  World.add(world,block3);

 //fazendo o chão
   var propriedadesdochao = {
		isStatic: true
	  }
	  ground = Bodies.rectangle(400,550,900,15,propriedadesdochao);
	
	  World.add(world,ground);

  rectMode(CENTER);
}


function draw() {
  rectMode(CENTER);
  background(0);

  Engine.update(engine);

  ellipse(block1.position.x,block1.position.y,50,50);
  rect(block2.position.x,block2.position.y,50,50);
  rect(block3.position.x,block3.position.y,80,50)
  rect(ground.position.x,ground.position.y,800,15);

 
}

