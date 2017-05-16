
var fruitObj = function()
{
	this.alive = [];//bool, 属性
	this.x = [];
	this.y = [];//果实的x，y坐标
	this.aneNO = [];
	this.l = [];//图片长度
	this.spd =[];//速度
	this.fruitType = [];//区别果实类型
	this.orange = new Image();
	this.blue = new Image();
}
fruitObj.prototype.num = 30;
fruitObj.prototype.init = function()
{
	for (var i = 0; i < this.num; i++)
	{
		this.alive[i] = false;//所有果实处于休眠状态
		this.x[i] = 0;
		this.y[i] = 0;
		this.aneNO[i] = 0;
		this.spd[i] = Math.random() * 0.017 + 0.003;//[0, 0.02)→[0.005, 0.015)
		this.fruitType[i] = "";
		//this.born(i);//初始化时所有的果实都出生

	}
	this.orange.src = "./src/fruit.png";
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
				if(this.fruitType[i] == "blue")
				{
					var pic = this.blue;
				}
				else
				{
					var pic = this.orange;
				}
				if(this.l[i] <= 14) //grow
				{
					var NO = this.aneNO[i];
					this.x[i] = ane.headx[NO];
					this.y[i] = ane.heady[NO];
					this.l[i] += this.spd[i] * deltaTime;
					//下一句也可以不要
					//ctx1.drawImage(pic, this.x[i] - this.l[i] * 0.5, this.y[i] - this.l[i] * 0.5, this.l[i], this.l[i]);
				}
				else
				{
					this.y[i] -= this.spd[i] * 6 * deltaTime;
					ctx1.drawImage(pic, this.x[i] - this.l[i] * 0.5, this.y[i] - this.l[i] * 0.5, this.l[i], this.l[i]);
				}
			//上一句不要这句就要加上
			ctx1.drawImage(pic, this.x[i] - this.l[i] * 0.5, this.y[i] - this.l[i] * 0.5, this.l[i], this.l[i]);
			if (this.y[i] < 10) 
			{
				this.alive[i] = false;
			}
		}
		
	}
}
fruitObj.prototype.born = function(i)
{
	//var aneID = Math.floor(Math.random() * ane.num);
	this.aneNO[i] = Math.floor(Math.random() * ane.num);
	//this.x[i] = ane.headx[aneID];
	//this.y[i] = ane.heady[aneID];
	this.l[i] = 0;
	this.alive[i] = true;
	var ran = Math.random();
	if(ran < 0.2)
	{
		this.fruitType[i] = "blue";//orange, blue
	}
	else
	{
		this.fruitType[i] = "orange";
	}
}
fruitObj.prototype.dead = function(i)
{
	this.alive[i] = false;
}
/*fruitObj.prototype.update = function()
{
	var num = 0;
	for(var i = 0; i < this.num; i++)
	{
		if (this.alive[i]) num++;
	}
}*/
function fruitMonitor()
{
	var num = 0;
	for (var i = 0; i < fruit.num; i++) 
	{
	 if(fruit.alive[i]) num++;
	}
	if(num < 15)
	{
		//send fruit
		sendFruit();
		return;
	}
}
	function sendFruit()
	{
		for (var i = 0; i < fruit.num; i++) 
		{
			if(!fruit.alive[i])
			{
				fruit.born(i);
				return;//本次循环已结束
			}
		}
	}