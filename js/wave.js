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
	ctx2.save();
	ctx2.lineWidth = 2;
	ctx2.shadowBlur = 10;
	ctx2.shadowColor = "white";
	for (var i = 0; i < this.num; i++) 
	{
		if (this.alive[i])
		{
			this.r[i] += deltaTime * 0.04;
			if(this.r[i] > 50)
			{
				this.alive[i] = false;
				break;
			}
			//因为若r>50则alpha变成负值，[0,1]范围外的值均默认为1
			var alpha = 1 - this.r[i] / 50;//透明度与圆半径成反比
			//api
			ctx2.beginPath();
			ctx2.arc(this.x[i], this.y[i], this.r[i], 0, Math.PI * 2);
			ctx2.closePath();
			ctx2.strokeStyle = "rgba(255, 255, 255," + alpha +")";
			ctx2.stroke();
			//draw
		}
	}
	ctx2.restore();
}
waveObj.prototype.born = function(x, y)
{
	for (var i = 0; i < this.num; i++) {
		if(!this.alive[i])
		{
			this.alive[i] = true;
			this.r[i] = 10;
			this.x[i] = x;
			this.y[i] = y;
			//born
			return;
		}
	}
}