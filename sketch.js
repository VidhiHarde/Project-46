var player,playerImg;
var road,roadImg;
var edges;
var garbageGrp,g1,g2,g3,g4,g5,g6,g7,g8,g9,g10;
var scoreSound;
var bin,binImg;
var lObstacleGrp,lObstacleImg;
var rObstacleGrp,rObstacleImg;
var PLAY=0;
var END=0;
var gameState=PLAY;

function preload(){
playerImg=loadAnimation("Images/Player.png","Images/PlayerWalking.png");	
roadImg=loadImage("Images/Road2.jpg");
g1=loadImage("Images/G1.png");
g2=loadImage("Images/G2.png");
g3=loadImage("Images/G3.png");
g4=loadImage("Images/G4.png");
g5=loadImage("Images/G5.png");
g6=loadImage("Images/G6.png");
g7=loadImage("Images/G7.png");
g8=loadImage("Images/G8.png");
g9=loadImage("Images/G9.png");
g10=loadImage("Images/G10.png");
scoreSound=loadSound("Sounds/Score.wav");
binImg=loadImage("Images/Bin.png");
lObstacleImg=loadImage("Images/Obstacle_Left.png");
rObstacleImg=loadImage("Images/Obstacle_Right.png")
}

function setup() {
//creating canvas	
createCanvas(500, 600);
//creating road, player and bin sprites respectively.
road=createSprite(245,260,400,800);
road.addImage("roadI",roadImg);
road.scale=0.9;
road.velocityY=4;

player=createSprite(100,500,10,40);
player.addAnimation("P1",playerImg);
player.setCollider("circle",0,0,15);

bin=createSprite(60,90,30,70);
bin.addImage("duatbin",binImg);
bin.scale=0.2;

//creating garbage,lObstacle and rObstacle groups respectively.
garbageGrp=new Group();
lObstacleGrp=new Group();
rObstacleGrp=new Group();
}

function draw() {
background(0);
if(gameState===PLAY){
//moving the player left and right with left and right arrow keys respectively.	
if(keyDown(LEFT_ARROW)){
player.x=player.x-5;
 }
if(keyDown(RIGHT_ARROW)){
player.x=player.x+5;
 }
//resetting the road. 
if(road.y>350){
road.y=250;
 }
//to play sound and destroy the garbage when the player touches it. 
if(garbageGrp.isTouching(player)){
scoreSound.play();
garbageGrp.destroyEach();
 }
//to call garbage, LeftObstacle, RightObstacle functions respectively. 
spawnGarbage();
spawnLeftObstacle();
spawnRightObstacle();
 }
drawSprites();
//to write massage
textSize(30);
textFont("Small Fonts")
fill(0)
text("K",475,50);	
text("E",475,80);
text("E",475,110);
text("P",475,140);
text("Y",475,180);
text("O",475,210);
text("U",475,240);
text("R",475,270);
text("C",475,310);
text("I",480,340);
text("T",475,370);
text("Y",475,400);
text("C",475,440);
text("L",475,470);
text("E",475,500);
text("A",475,530);
text("N",475,560);
}
//creating function spawnGarbage, spawnLeftObstacle and spawnRightObstacle respectively.
function spawnGarbage() {
if(frameCount % 100 === 0) {
var garbage = createSprite(300,165,10,40);
garbage.x=Math.round(random(100,400))
garbage.velocityY = 4
//generate random garbage
var rand = Math.round(random(1,6));
switch(rand) {
case 1: garbage.addImage(g1);
break;
case 2: garbage.addImage(g2);
break;
case 3: garbage.addImage(g3);
break;
case 4: garbage.addImage(g4);
break;
case 5: garbage.addImage(g5);
break;
case 6: garbage.addImage(g6);
break;
case 7: garbage.addImage(g7);
break;
case 8: garbage.addImage(g8);
break;
case 9: garbage.addImage(g9);
break;
case 10: garbage.addImage(g10);
break;					
default: break;
 }	  
//assign scale and lifetime to garbage         
garbage.scale = 0.5;
garbage.lifetime = 300;
//add each garbage to the group
garbageGrp.add(garbage);
 }
  }
function spawnLeftObstacle(){
//to create leftObstacle.	
if(frameCount%160===0){
var lObstacle=createSprite(100,100,10,10);
//assigning random Y values to the leftObstacle and adding image to it.
lObstacle.y=Math.round(random(100,400));
lObstacle.addImage(lObstacleImg);
//giving velocity and adding leftObstacle in the group.
lObstacle.velocityY=4;
lObstacleGrp.add(lObstacle);
//assign scale and lifetime to leftObstacle.
lObstacle.scale=0.2;
lObstacle.lifetime=550;
 }
  } 
function spawnRightObstacle(){
//to create rightObstacle.	
if(frameCount%160===0){
var rObstacle=createSprite(400,300,10,10);
//assigning random Y values to the rightObstacle and adding image to it.	
rObstacle.y=Math.round(random(100,500));
rObstacle.addImage(rObstacleImg);
//giving velocity and adding rightObstacle in the group.
rObstacle.velocityY=4;
rObstacleGrp.add(rObstacle);
//assign scale and lifetime to rightObstacle.
rObstacle.scale=0.2;
rObstacle.lifetime=550;
 }
  } 



