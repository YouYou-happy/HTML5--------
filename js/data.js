var dataObj = function()
{
	this.fruitNum = 0;
	this.double = 1;
	this.score = 0;
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

	ctx2.fillStyle = "white";
	//ctx2.fillText("num " + this.fruitNum, w * 0.5, h - 50);
	//ctx2.fillText("double " + this.double, w * 0.5, h - 80);
	ctx2.fillText("score " + this.score, w * 0.5, h - 20);
}
dataObj.prototype.addScore = function()
{
	this.score += this.fruitNum * 100 * this.double;
	this.fruitNum = 0;
	this.double = 1;
}