function Player(x,y){	
	this.Pieces = new Array(0);
	this.Score = 0;
	this.Color = color(255,0,0,150);
	this.ColorAtt = "Red";
	this.Type = "Square";
	
	this.CreateSnek = function(){
		this.Pieces = new Array(0);
		append(this.Pieces, new SnekPiece(x+1, y));
		append(this.Pieces, new SnekPiece(x, y));
		this.Pieces[1].nextPiece = this.Pieces[0];
		this.Pieces[0].head = true;
		
		this.Pieces[0].direction="Right";
		this.Pieces[1].direction="Right";
	}
	
	this.ShowSnek = function(){
		for(i=0;i<this.Pieces.length;i++)
		{
			this.Pieces[i].Show();
		}
	}
	
	this.MoveSnek = function(){
		var oldPiece;
		for(i=0;i<this.Pieces.length;i++){
			tmp = oldPiece;
			oldPiece = new SnekPiece(this.Pieces[i].x, this.Pieces[i].y);
			if(!this.Pieces[0].dead && i==0){
				switch(this.Pieces[i].direction)
				{
					case "Right":
						if(!this.CheckDeath())
						{
							this.Pieces[i].x++;
						}
						else
						{
							this.Pieces[0].dead = this.CheckDeath();
						}
					break;
					case "Left":
						if(!this.CheckDeath())
						{
							this.Pieces[i].x--;
						}
						else
						{
							this.Pieces[0].dead = this.CheckDeath();
						}
					break;
					case "Up":
						if(!this.CheckDeath())
						{
							this.Pieces[i].y--;
						}
						else
						{
							this.Pieces[0].dead = this.CheckDeath();
						}
					break;
					case "Down":
						if(!this.CheckDeath())
						{
							this.Pieces[i].y++;
						}
						else
						{
							this.Pieces[0].dead = this.CheckDeath();
						}
					break;
				}
				Moved = false;
			}
			else if(!this.Pieces[0].dead && i!=0)
			{
				this.Pieces[i].x = tmp.x;
				this.Pieces[i].y = tmp.y;
			}
		}
	}
	
	this.ChangeDir = function(dir){
		this.Pieces[0].direction = dir;
	}
	
	this.CheckDeath = function(){
		
		for(l=1;l<this.Pieces.length;l++)
		{
			switch(this.Pieces[0].direction)
			{
				case "Up":
					if(this.Pieces[0].y-1 == this.Pieces[l].y && this.Pieces[0].x == this.Pieces[l].x) return true;
					if(this.Pieces[0].y-1 <= 0) return true;
				break;
				case "Right":
					if(this.Pieces[0].y == this.Pieces[l].y && this.Pieces[0].x+1 == this.Pieces[l].x) return true;
					if(this.Pieces[0].x+1 > max) return true;
				break;
				case "Down":
					if(this.Pieces[0].y+1 == this.Pieces[l].y && this.Pieces[0].x == this.Pieces[l].x) return true;
					if(this.Pieces[0].y+1 > max) return true;
				break;
				case "Left":
					if(this.Pieces[0].y == this.Pieces[l].y && this.Pieces[0].x-1 == this.Pieces[l].x) return true;
					if(this.Pieces[0].x-1 <= 0) return true;
				break;
			}
		}
				
		return false;
	}
	
	this.AddLength = function(){
		if(this.Pieces[0].x == point.x && this.Pieces[0].y == point.y)
		{
			point.On = false;
			append(this.Pieces,new SnekPiece(this.Pieces[0].x, this.Pieces[0].y));
			this.Pieces[this.Pieces.length-1].direction = this.Pieces[this.Pieces.length-2].direction;
			this.Score++;
		}
	}
}

function SnekPiece(x,y){
	this.nextPiece = null;
	this.head = false;
	this.direction = null;
	this.dead = false;
	this.wait = false;
	this.x = x;
	this.y = y;
	
	this.Show = function() {
		fill(player.Color);
		if(player.Type=="Square")
		{
			rect(this.x*gridSize,this.y*gridSize,gridSize,gridSize);
		}
		else if(player.Type=="Circle")
		{
			ellipse(this.x*gridSize+(gridSize/2),this.y*gridSize+(gridSize/2), gridSize-5);
		}
		else if(player.Type=="Triangle")
		{
			triangle(this.x*gridSize+(gridSize/2),this.y*gridSize,this.x*gridSize+(gridSize/2)-(gridSize/2),this.y*gridSize+gridSize,this.x*gridSize+(gridSize/2)+(gridSize/2),this.y*gridSize+gridSize);
		}
	}
}