var dataObj = function()
{
	this.fruitNum = 0;
	this.double = 1;
}
dataObj.prototype.reset = function()
{
	this.fruitNum = 0;
	this.double = 1;
}
dataObj.prototype.draw = function()
{
	var w = can1.width;
	var h = can1.height;

	ctx2.fillStyle = "white";
	ctx2.fillText("num " + this.fruitNum, w * 0.5, h - 50);
	ctx2.fillText("double " + this.double, w * 0.5, h - 80);
}