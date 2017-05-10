var can1;
var can2;

var ctx1;
var ctx2;     //对应的场景

var canWidth;
var canHeight;

var lastTime; //上一帧执行的时间
var deltaTime;//两帧之间的时间差

var bgPic = new Image();

var ane;
var fruit;

document.body.onload = game;
function game() {
	init();
	lastTime = Date.now();//初始化
	deltaTime = 0;
	gameloop();
}

function init()
{
	//获得canvas context
	can1 = document.getElementById("canvas1");//fishes, dust, UI, circle
	ctx1 = can1.getContext('2d');
	can2 = document.getElementById("canvas2");//background, ane, fruits
	ctx2 = can2.getContext('2d');    //画布上的画笔来画画

	bgPic.src = "./src/background.jpg";

	canWidth = can1.width;
	canHeight = can1.height;

	ane = new aneObj();
	ane.init();

	fruit = new fruitObj();
	fruit.init();
}
function gameloop()
{
	window.requestAnimFrame(gameloop);//setInterval,setTimeout,frame per second
	var now = Date.now();
	deltaTime = now - lastTime;
	lastTime = now;//更新上次的时间

	drawBackground();
	ane.draw();
	fruit.draw();
}