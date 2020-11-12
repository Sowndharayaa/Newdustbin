const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground1,box1,box2,box3,paper1

function preload()
{
	binImg = loadImage('dustbingreen.png');
}

function setup() {
	
	
    createCanvas(2000,800);
	rectMode(CENTER);
	engine = Engine.create();
	world = engine.world;	
	bin1 = new Dustbin(1100,495,150,15);
	bin2 = new Dustbin(1185,420,15,170);
	bin3 = new Dustbin(1015,420,15,170);
	
	ground = new Ground(650,650,1999,30);
	
	paper1 = new Paper(200,300);
	 Engine.run(engine);
  
}


function draw() {
	background("green");
	Engine.update(engine);
	ground.display();
	bin1.display();
	bin2.display();
	bin3.display();
	image(binImg,1000,330,200,200);
	paper1.display();
    if (mouseIsPressed) {
        strokeWeight(5);
        point(mouseX, mouseY);
        fill(0, 0, 0);
        textSize(12);
        text(mouseX + " " +"," + " "+ mouseY);        
    }
}
	function keyPressed()	{
		if(keyCode===UP_ARROW)	{
			Matter.Body.applyForce(paper1.body,paper1.body.position,{x:110,y:-110});

		}
	}