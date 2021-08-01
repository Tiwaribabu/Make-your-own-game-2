var deaths = 0;
var ball,restart,wall1,wall2,wall3,wall4,wall5,wall6,wall7,wall8,wall9,wall10,wall11,wall12,wall13,wall14,wall15,wall16;
var wall17,wall18,wall19,wall20,wall21,wall22,wall23,wall24,wall25,wall26,wall27,wall28,wall29,wall30,wall31,wall32,wall33,wall34;
var wall35,wall36,wall37,button1,button2,button3,button4,button5,button6,button7,button8,button9,button10,button11,button12,button13,win;
var edges;
function setup(){
createCanvas(windowWidth, windowHeight);
ball = createSprite(15,15,15,15);
ball.shapeColor = "black";
wall1 = createSprite(137,46,300,10);
wall2 = createSprite(690,101,10,420);
wall3 = createSprite(500.5,166,399,10);
wall4 = createSprite(290.5,101,10,120);
wall5 = createSprite(150.5,166,300,10);
wall6 = createSprite(230,115,100,10);
}
function draw(){
 background(rgb(ball.x,ball.y,100));
 text(mouseX+","+mouseY,mouseX,mouseY)
 drawSprites();
}