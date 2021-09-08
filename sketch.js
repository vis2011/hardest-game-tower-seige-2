const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,ball,ground;
var stand1,stand2,stand3;
var ball;
var slingshot;
var polygon_img;
var polygon;
var space=0;
var points=0;
var polygen2;
var score=0;

function preload(){
  polygon_img=loadImage("polygon.png");
}
function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  this.polygon=Bodies.circle(50,200,20);
  World.add(world,polygon);
  this.polygen2=Bodies.circle(100,300,20);
  World.add(world,polygen2);
  ground = new Ground();
  stand1 = new Stand(390,300,250,10);
  stand2 = new Stand(725,50,250,10);
  stand3 = new Stand(725,260,250,10);
  stand4 = new Stand(850,155,10,220);
  stand5 = new Stand(600,250,10,30);
  stand6 = new Stand(600,60,10,30);
 
  //level one
  block1 = new Block0(300,275,30,40);
  block2 = new Block0(330,275,30,40);
  block3 = new Block0(360,275,30,40);
  block4 = new Block0(390,275,30,40);
  block5 = new Block0(420,275,30,40);
  block6 = new Block0(450,275,30,40);
  block7 = new Block0(480,275,30,40);
  //level two
  block8 = new Block1(330,235,30,40);
  block9 = new Block1(360,235,30,40);
  block10 = new Block1(390,235,30,40);
  block11 = new Block1(420,235,30,40);
  block12 = new Block1(450,235,30,40);
  //level three
  block13 = new Block2(360,195,30,40);
  block14 = new Block2(390,195,30,40);
  block15 = new Block2(420,195,30,40);
  //top
  block16 = new Block3(390,155,30,40);
 
  block17 = new Block4(620,180,30,40);
  block18 = new Block4(650,180,30,40);
  block19 = new Block4(680,180,30,40);
  block20 = new Block4(720,180,30,40);
  block21 = new Block4(750,180,30,40);
  block22 = new Block4(780,180,30,40);
  block23 = new Block4(820,180,30,40);
  //level two
  block24 = new Block1(650,140,30,40);
  block25 = new Block1(680,140,30,40);
  block26 = new Block1(720,140,30,40);
  block27 = new Block1(750,140,30,40);
  block28= new Block1(780,140,30,40);
  //level three
  block29 = new Block2(680,100,30,40);
  block30 = new Block2(720,100,30,40);
  block31 = new Block2(750,100,30,40);
  //top
  block32 = new Block3(720,60,30,40);


  this.slingshot=new slingShot(this.polygon,{x:100,y:200});
  this.slingshot01=new slingShot(this.polygen2,{x:500,y:50});
  this.slingshot1=new slingShot(this.block32.body,{x:720,y:50});
  this.slingshot2=new slingshot1(this.block31.body,{x:750,y:50});
  this.slingshot3=new slingshot1(this.block30.body,{x:720,y:50});
  this.slingshot4=new slingshot1(this.block29.body,{x:690,y:50});
    this.slingshot5=new slingshot2(this.block28.body,{x:780,y:50});
    this.slingshot6=new slingshot2(this.block27.body,{x:750,y:50});
    this.slingshot7=new slingshot2(this.block26.body,{x:720,y:50});
    this.slingshot8=new slingshot2(this.block25.body,{x:690,y:50});
    this.slingshot9=new slingshot2(this.block24.body,{x:660,y:50});
    this.slingshot10=new slingshot3(this.block23.body,{x:810,y:50});
    this.slingshot11=new slingshot3(this.block22.body,{x:780,y:50});
    this.slingshot12=new slingshot3(this.block21.body,{x:750,y:50});
    this.slingshot13=new slingshot3(this.block20.body,{x:720,y:50});
    this.slingshot14=new slingshot3(this.block19.body,{x:695,y:50});
    this.slingshot15=new slingshot3(this.block18.body,{x:660,y:50});
      this.slingshot16=new slingshot3(this.block17.body,{x:635,y:50});
}
function draw() {
  background(56,44,44); 

  fill("red");
   textSize(24);
   text("hanging man",650,250);
   text("standing man",320,330);
   text("clicked spacebar :"+space,20,360);
   textSize(20);
   text("and if you dissapear a block you will",550,330);
   text(" get a point and if you gey 32 point ",540,350);
   text("you won !",670,370);
   textSize(30);
   text("polygon",50,300);
   text("polygen2",450,150);
  text("polygon points :"+points,650,300);
  text("polygen2 points :"+score,600,35);


  textSize(20);
  fill("lightyellow");


  if(space>149){
    textSize(50);
    fill("red");
    text("YOU LOSE",50,50);
    background("black");
  }

  image(polygon_img,this.polygon.position.x,this.polygon.position.y,50,50);
  image(polygon_img,this.polygen2.position.x,this.polygen2.position.y,50,50);
  ground.display();
  stand1.display();
  stand2.display();
  stand3.display();
  stand4.display();
  stand5.display();
  stand6.display();

  textSize(20);
  fill("lightyellow");
  stroke("black");
  strokeWeight(4);
  text("if you want to clear the standing man and the hanging man",20,50);
  text(" you have 50 chances if you click the",20,80);
  text("space bar the attacker will come ",20,110);
  text("again and you lose one chance.",20,140);
  text("if you lose 50 chances ..",20,170);
  text("                         YOU LOSE",5,200);



  strokeWeight(2);
  stroke(15);
  fill("skyblue");
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  fill("pink");
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  fill("turquoise");
  block13.display();
  block14.display();
  block15.display();
  fill("grey");
  block16.display();
  strokeWeight(2);
  stroke(15);
  fill("skyblue");
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();
  block22.display();
  block23.display();
  fill("pink");
  block24.display();
  block25.display();
  block26.display();
  block27.display();
  block28.display();
  fill("turquoise");
  block29.display();
  block30.display();
  block31.display();
  fill("grey");
  block32.display();
 slingshot.display();
 slingshot01.display();

}
 
function mouseDragged(){
    Matter.Body.setPosition(this.polygon, {x: mouseX , y: mouseY});
    Matter.Body.setPosition(this.polygen2, {x: mouseX , y: mouseY});
}

function mouseReleased(){
  slingshot.fly();
  slingshot01.fly();

}


function keyPressed(){
  if(keyCode== 32){
     Matter.Body.setPosition(this.polygon, {x:50,y:200});
    slingshot.attach(this.polygon);
    space=space+1;
  }
  if(keyCode == 32){
    Matter.Body.setPosition(this.polygen2, {x:50,y:200});
    slingshot01.attach(this.polygen2);
    space=space+1;
  }
}