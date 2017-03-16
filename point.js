function Point(x, y){
	this.x = x;
	this.y = y;
	this.On = true;
	
	this.addPoint = function(){
		var x = round(random(1,max));
		var y = round(random(1,max));
		
		
		this.x = x;
		this.y = y;
		this.On = true;
	}
	this.showPoint = function() {
		fill(255,150,0,150);
		ellipse(this.x*gridSize+(gridSize/2),this.y*gridSize+(gridSize/2),gridSize-5);
	}
}