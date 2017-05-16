//定义一个海葵的类
var aneObj = function()    
{
	//start point, control point, end point(sin)
	this.rootx = [];
	this.headx = [];
	this.heady = [];
	this.amp = [];
	this.alpha = 0;
	//this.len = [];
}
aneObj.prototype.num = 50;
aneObj.prototype.init = function()
{
	//var h = can1.height;
	for (var i = 0; i < this.num; i++)
	{
		this.rootx[i] = i * 16 + Math.random() * 20;//[0, 1),20是间距
		this.headx[i] = this.rootx[i];
		this.heady[i] = canHeight - 250 + Math.random() * 50;
		this.amp[i] = Math.random() * 50 + 50;
		//this.len[i] = 200 + Math.random() * 50;//海葵高度
	}
}
aneObj.prototype.draw = function()
{
	this.alpha += deltaTime * 0.0008; //摆动速度
	var l = Math.sin(this.alpha);//[-1, 1]
	ctx1.save();
	ctx1.globalAlpha = 0.6;
	ctx1.lineWidth = 20;
	ctx1.lineCap = "round";
	ctx1.strokeStyle = "#3b154e";
	for (var i = 0; i < this.num; i++)
	{
		//beginPath, moveTo, lineTo, stroke, strokeStyle, lineWidth, lineCap, globalAlpha
		ctx1.beginPath();
		ctx1.moveTo(this.rootx[i], canHeight);
		ctx1.quadraticCurveTo(this.rootx[i], canHeight - 100, this.headx[i] + l * this.amp[i], this.heady[i]);
		//ctx1.lineTo(this.x[i], canHeight - this.len[i]);
		ctx1.stroke();
	}
	ctx1.restore();
}