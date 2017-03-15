function Point(x, y){
	this.x = x;
	this.y = y;
	this.On = true;
	
	this.addPoint = function(){
		var x = round(random(1,max));
		var y = round(random(1,max));
		
/*		for(i=0; i<player.Pieces.length;i++)
		{
			if(player.Pieces[i].x == x || player.Pieces[i].y == y)
			{
				temp = true;
			}
		}
		
		if(!temp){*/
			this.x = x;
			this.y = y;
			this.On = true;
		//}
	}
	this.showPoint = function() {
		fill(0,255,0,100);
		rect(this.x*gridSize,this.y*gridSize,gridSize,gridSize);
	}
}