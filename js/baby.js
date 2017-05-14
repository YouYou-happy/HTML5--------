var babyObj = function()
{
	this.x;
	this.y;
	this.angle;
	this.babyEye = new Image();
	this.babyBody = new Image();
	this.babyTail = new Image();

	this.babyTailTimer = 0;
	this.babyTailCount = 0;
}
babyObj.prototype.init = function()
{
	this.x = canWidth * 0.5 - 50;
	this.y = canHeight * 0.5 + 50;
	this.angle = 0;
	this.babyEye.src = "./src/babyEye0.png";
	this.babyBody.src = "./src/babyFade0.png";
	//this.babyTail.src = "./src/babyTail0.png";
}
babyObj.prototype.draw = function()
{
	//lerp x, y
	this.x = lerpDistance(mom.x, this.x, 0.98);
	this.y = lerpDistance(mom.y, this.y, 0.98);

	//lerp angle
	var deltaY = mom.y - this.y;
	var deltaX = mom.x - this.x;
	var beta = Math.atan2(deltaY, deltaX);//返回值[-PI, PI]

	//lerp angle 大鱼的角度跟随 鼠标的角度
	this.angle = lerpAngle(beta, this.angle, 0.6);
	
	//baby tail count
	this.babyTailTimer += deltaTime;
	if (this.babyTailTimer > 50) 
	{
		this.babyTailCount = (this.babyTailCount + 1) % 8;
		this.babyTailTimer %= 50;
	}

	//ctx1
	ctx1.save();
	//translate()转移原点坐标
	ctx1.translate(this.x, this.y);
	ctx1.rotate(this.angle);
	
	var babyTailCount = this.babyTailCount;
	//先画尾巴，再画身体，再画眼睛
	ctx1.drawImage(babyTail[babyTailCount], -babyTail[babyTailCount].width * o.5 + 23, -babyTail[babyTailCount].height * 0.5);
	ctx1.drawImage(this.babyBody, -this.babyBody.width * o.5, -this.babyBody.height * 0.5);
	ctx1.drawImage(this.babyEye, -this.babyEye.width * o.5, -this.babyEye.height * 0.5);

	ctx1.restore();
}