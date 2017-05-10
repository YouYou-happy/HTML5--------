
var fruitObj = function()
{
	this.alive = [];//bool, 属性
	this.x = [];
	this.y = [];//果实的x，y坐标
	this.l = [];//图片长度
	this.spd =[];//速度
	this.orange = new Image();
	this.blue = new Image();
}
fruitObj.prototype.num = 30;
fruitObj.prototype.init = function()
{
	for (var i = 0; i < this.num; i++)
	{
		this.alive[i] = true;//所有果实处于休眠状态
		this.x[i] = 0;
		this.y[i] = 0;
		this.spd[i] = Math.random() * 0.01 + 0.005;//[0, 0.02)→[0.005, 0.015)
		this.born(i);//初始化时所有的果实都出生
	}
	this.orange.src = "./src/orange.png";
	this.blue.src = "./src/blue.png";//加载两张图片
}
fruitObj.prototype.draw = function()
{
	for (var i = 0; i < this.num; i++) 
	{
		//draw
		//find an ane, grow, fly up
		if (this.alive[i]) 
		{
				if(this.l[i] <= 14)
			{
				this.l[i] += this.spd[i] * deltaTime;
			}
			else
			{
				this.y[i] -= this.spd[i] * 6 * deltaTime;
			}
			ctx2.drawImage(this.orange, this.x[i] - this.l[i] * 0.5, this.y[i] - this.l[i] * 0.5, this.l[i], this.l[i]);
			if (this.y[i] < 10) 
			{
				this.alive[i] = false;
			}
		}
		
	}
}
fruitObj.prototype.born = function(i)
{
	var aneID = Math.floor(Math.random() * ane.num);
	this.x[i] = ane.x[aneID];
	this.y[i] = canHeight - ane.len[aneID];
	this.l[i] = 0;
}
fruitObj.prototype.update = function()
{
	var num = 0;
	for(var i = 0; i < this.num; i++)
	{
		if (this.alive[i]) num++;
	}
}