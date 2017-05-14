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

var mom;
var baby;

var mx;
var my;//定义鼠标变量

var babyTail = [];

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

	//捕捉鼠标,鼠标移动时即可监测
	can1.addEventListener('mousemove', onMouseMove, false);

	bgPic.src = "./src/background.jpg";

	canWidth = can1.width;
	canHeight = can1.height;

	ane = new aneObj();
	ane.init();

	fruit = new fruitObj();
	fruit.init();

	mom = new momObj();
	mom.init();

	baby = new babyObj();
	baby.init();

	mx = canWidth * 0.5;
	my = canHeight * 0.5;

	for (var i = 0; i < 8; i++) 
	{
		babyTail[i] = new Image();
		babyTail[i].src = "./src/babyTail" + i + ".png";
	}
function gameloop()
{
	window.requestAnimFrame(gameloop);//setInterval,setTimeout,frame per second
	var now = Date.now();
	deltaTime = now - lastTime;
	lastTime = now;//更新上次的时间
	if(deltaTime > 40) deltaTime = 40;

	drawBackground();
	ane.draw();
	fruitMonitor();
	fruit.draw();

	ctx1.clearRect(0, 0, canWidth, canHeight);
	mom.draw();
	momFruitsCollision();
	baby.draw();
}
function onMouseMove(e)     //
{
	if(e.offSetX || e.layerX)
	{
		mx = e.offSetX == undefined ? e.layerX : e.offSetX;
		my = e.offSetY == undefined ? e.layerY : e.offSetY;
	}
}