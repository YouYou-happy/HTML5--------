//定义一个海葵的类
var aneObj = function()    
{
	this.x = [];
	this.len = [];
}
aneObj.prototype.num = 50;
aneObj.prototype.init = function()
{
	for (var i = 0; i < this.num; i++)
	{
		this.x[i] = i * 20 + Math.random() * 20;//[0, 1),20是间距
		this.len[i] = 200 + Math.random() * 50;//海葵高度
	}
}
aneObj.prototype.draw = function()
{
	ctx1.save();
	ctx1.globalAlpha = 0.6;
	ctx1.lineWidth = 20;
	ctx1.lineCap = "round";
	ctx1.strokeStyle = "#3b154e";
	for (var i = 0; i < this.num; i++)
	{
		//beginPath, moveTo, lineTo, stroke, strokeStyle, lineWidth, lineCap, globalAlpha
		ctx1.beginPath();
		ctx1.moveTo(this.x[i], canHeight);
		ctx1.lineTo(this.x[i], canHeight - this.len[i]);
		ctx1.stroke();
	}
	ctx1.restore();
}