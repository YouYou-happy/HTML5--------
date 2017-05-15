var dataObj = function()
{
	this.fruitNum = 0;
	this.double = 1;
	this.score = 0;
	this.gameOver = false;
	this.alpha = 0;
}
/*dataObj.prototype.reset = function()
{
	this.fruitNum = 0;
	this.double = 1;
}*/
dataObj.prototype.draw = function()
{
	var w = can1.width;
	var h = can1.height;

	ctx2.save();
	ctx2.shadowBlur = 10;
	ctx2.shadowColor = "white";

	ctx2.fillStyle = "white";
	//ctx2.fillText("num " + this.fruitNum, w * 0.5, h - 50);
	//ctx2.fillText("double " + this.double, w * 0.5, h - 80);
	ctx2.fillText("SCORE: " + this.score, w * 0.5, h - 20);

	if(this.gameOver)
	{
		this.alpha += deltaTime * 0.0005;
		if(this.alpha > 1)
			this.alpha = 1;
		ctx2.fillStyle = "rgba(255, 255, 255," + this.alpha + ")";
		ctx2.fillText("GAMEOVER", w * 0.5, h * 0.5);
	}
	ctx2.restore();
}
dataObj.prototype.addScore = function()
{
	this.score += this.fruitNum * 100 * this.double;
	this.fruitNum = 0;
	this.double = 1;
}