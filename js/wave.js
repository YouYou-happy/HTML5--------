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
	}
}
waveObj.prototype.draw = function()
{
	for (var i = 0; i < this.num; i++) 
	{
		if (!this.alive[i])
		{
			//draw
		}
	}
}
waveObj.prototype.born = function()
{
	for (var i = 0; i < this.num; i++) {
		if(!this.alive[i])
		{
			//born
			return;
		}
	}
}