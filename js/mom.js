var momObj = function()
{
	this.x;
	this.y;
	this.angle;
	this.bigEye = new Image();
	this.bigBody = new Image();
	this.bigTail = new Image();

	this.momTailTimer = 0;
	this.momTailCount = 0;

	this.momEyeTimer = 0;
	this.momEyeCount = 0;
	this.momEyeInterval = 1000;
}
momObj.prototype.init = function()
{
	this.x = canWidth * 0.5;
	this.y = canWidth * 0.5;
	this.angle = 0;
	//this.bigEye.src = "./src/bigEye0.png";
	this.bigBody.src = "./src/bigSwim0.png";
	this.bigTail.src = "./src/bigTail0.png";
}
momObj.prototype.draw = function()
{
	//lerp x,y 让当前值趋向于目标值，大鱼的坐标趋向于鼠标的坐标
	this.x = lerpDistance(mx, this.x, 0.98);
	this.y = lerpDistance(my, this.y, 0.99);

	//delta angle每一帧都要去跟随这个角度差
	//Math.atan2(y, x) 反正切来计算
	var deltaY = my - this.y;
	var deltaX = mx - this.x;
	var beta = Math.atan2(deltaY, deltaX) + Math.PI;//返回值[-PI, PI]

	//lerp angle 大鱼的角度跟随 鼠标的角度
	this.angle = lerpAngle(beta, this.angle, 0.6);

	//tail
	this.momTailTimer += deltaTime;
	if(this.momTailTimer > 50)
	{
		this.momTailCount = (this.momTailCount + 1) % 8;
		this.momTailTimer %= 50;
	}

	//eye
	this.momEyeTimer += deltaTime;
	if(this.momEyeTimer > this.momEyeInterval)
	{
		this.momEyeCount = (this.momEyeCount + 1) % 2;
		this.momEyeTimer %= this.momEyeInterval;
		if(this.momEyeCount == 0)
		{
			this.momEyeInterval = Math.random() * 1500 + 2000;
		}else
		{
			this.momEyeInterval = 200;
		}
	}

	ctx2.save();
	ctx2.translate(this.x, this.y);//将原点移至大鱼坐标处
	ctx2.rotate(this.angle);       //旋转画布
	var momTailCount = this.momTailCount;
	ctx2.drawImage(momTail[momTailCount], -momTail[momTailCount].width * 0.5 + 30, -momTail[momTailCount].height * 0.5);
	ctx2.drawImage(this.bigBody, -this.bigBody.width * 0.5, -this.bigBody.height * 0.5);
	var momEyeCount = this.momEyeCount;
	ctx2.drawImage(momEye[momEyeCount], -momEye[momEyeCount].width * 0.5, -momEye[momEyeCount].height * 0.5);

	ctx2.restore();
}