var haloObj = function()
{
	this.x = [];
	this.y = [];
	this.alive = [];
	this.r = [];
}
haloObj.prototype.num = 5;
haloObj.prototype.init = function()
{
	for (var i = 0; i < this.num; i++) 
	{
		this.x[i] = 0;
		this.y[i] = 0;
		this.alive[i] = false;
		this.r[i] = 0;
	}
}
haloObj.prototype.draw = function()
{
	ctx2.save();
	ctx2.lineWidth = 2;
	ctx2.shadowBlur = 10;
	ctx2.shadowColor = "rgba(203, 91, 0, 1)";
	for (var i = 0; i < this.num; i++) 
	{
	 	if(this.alive[i])
	 	{
	 		//draw
	 		this.r[i] += deltaTime * 0.05;
	 		if(this.r[i] > 100)
	 		{
	 			this.alive[i] = false;
	 			break;
	 		}
	 		var alpha = 1 - this.r[i] / 100;

	 		ctx2.beginPath();
	 		ctx2.arc(this.x[i], this.y[i], this.r[i], 0, Math.PI * 2);
	 		ctx2.closePath();
	 		ctx2.strokeStyle = "rgba(203, 91, 0, " + alpha + ")";
	 		ctx2.stroke();
	 	}
	}
	ctx2.restore();
}
haloObj.prototype.born = function(x, y)
{
	for (var i = 0; i < this.num; i++) 
	{
		if(!this.alive[i])
		{
			this.x[i] = x;
			this.y[i] = y;
			this.r[i] = 10;
			this.alive[i] = true;
		}
	}
}