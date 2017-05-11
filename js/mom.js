var momObj = function()
{
	this.x;
	this.y;
	this.angle;
	this.bigEye = new Image();
	this.bigBody = new Image();
	this.bigTail = new Image();
}
momObj.prototype.init = function()
{
	this.x = canWidth * 0.5;
	this.y = canWidth * 0.5;
	this.angle = 0;
	this.bigEye.src = "./src/bigEye0.png";
	this.bigBody.src = "./src/bigSwim0.png";
	this.bigTail.src = "./src/bigTail0.png";
}
momObj.prototype.draw = function()
{
	//lerp x,y 让当前值趋向于目标值，大鱼的坐标趋向于鼠标的坐标
	this.x = lerpDistance(mx, this.x, 0.98)；
	this.y = lerpDistance(my, this.y, 0.99)；

	//delta angle每一帧都要去跟随这个角度差
	//Math.atan2(y, x) 反正切来计算
	var deltaY = my - this.y;
	var deltaX = mx - this.x;
	var beta = Math.atan2(deltaY, deltaX);//返回值[-PI, PI]

	//lerp angle 大鱼的角度跟随 鼠标的角度
	this.angle = lerpAngle(beta, this.angle, 0.6);

	ctx1.save();
	ctx1.translate(this.x, this.y);//将原点移至大鱼坐标处
	ctx1.rotate(this.angle);       //旋转画布
	ctx1.drawImage(this.bigTail, -this.bigTail.width * 0.5 + 30, -this.bigTail.height * 0.5);
	ctx1.drawImage(this.bigBody, -this.bigBody.width * 0.5, -this.bigBody.height * 0.5);
	ctx1.drawImage(this.bigEye, -this.bigEye.width * 0.5, -this.bigEye.height * 0.5);

	ctx1.restore();
}