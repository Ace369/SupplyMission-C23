var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
var right, base, left;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)
	
	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5, {restitution:0.4, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , { isStatic:true} );
	World.add(world, ground);

	right = createSprite(500, 605, 20, 100);
	base = createSprite(400, 665, 200, 20);
	left = createSprite(300, 605, 20, 100);

	right = Bodies.rectangle((500, 665, 20, 100, { isStatic:true}))
	base = Bodies.rectangle((500, 665, 20, 100, { isStatic:true}))
	left = Bodies.rectangle((500, 665, 20, 100, { isStatic:true}))

	right.shapeColor = color(250, 0, 0)
  	base.shapeColor = color(250, 0, 0)
  	left.shapeColor = color(250, 0, 0)

	World.add(world, right)
	World.add(world, base)
	World.add(world, left)

	Engine.run(engine)


  
}


function draw() {
  rectMode(CENTER);
  background(0);

  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 

  //packageBody.collide(base);

  drawSprites();
 
}

function keyPressed() {
	if (keyCode === LEFT_ARROW) {

		helicopterSprite.x = helicopterSprite.x - 20;
		translation = {x: -20, y:0};
		Matter.Body.translate(packageBody, translation);
	}

	else if (keyCode === RIGHT_ARROW) {

		helicopterSprite.x = helicopterSprite.x + 20;
		translation = {x: +20, y:0};
		Matter.Body.translate(packageBody, translation);
	}

	else if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(packageBody , false);
    
 	}
}



