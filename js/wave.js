//定义一个池子
var waveObj = function()
{
	this.x = [];
	this.y = [];
	this.alive = [];   //每个物体都有状态
	this.r = [];

}
waveObj.prototype.num = 10;
waveObj.prototype.init = function()
{
	for (var i = 0; i < this.num; i++) 
	{
		this.alive[i] = false;
		this.r[i] = 0;
	}
}
waveObj.prototype.draw = function()
{
	for (var i = 0; i < this.num; i++) 
	{
		if (this.alive[i])
		{
			this.r[i] += deltaTime * 0.1;
			if(this.r[i] > 100)
				this.alive[i] = false;
			var alpha = 1 - this.r[i] / 100;
			//api
			ctx2.beginPath();
			ctx2.arc(this.x[i], this.y[i], this.r[i], 0, Math.PI * 2);
			ctx2.closePath();
			ctx2.strokeStyle = "rgba(255, 255, 255," + alpha +")";
			ctx2.stroke();
			//draw
		}
	}
}
waveObj.prototype.born = function(x, y)
{
	for (var i = 0; i < this.num; i++) {
		if(!this.alive[i])
		{
			this.alive[i] = true;
			this.r[i] = 20;
			this.x[i] = x;
			this.y[i] = y;
			//born
			return;
		}
	}
}