function drawWarrior(){
	if(WhosTurn == "Blue")
	{
		fill(0,0,255);
	}
	else if(WhosTurn == "Red")
	{
		fill(255,0,0);
	}
	
	textSize(15);
	
	text("1: Smash", 5, height-60);text("5MP", 80, height-60);
	text("2: Dash", 5, height-45);text("10MP", 80, height-45);
	text("3: Pound", 5, height-30);text("10MP", 80, height-30);
	text("4: Stun", 5, height-15);text("20MP", 80, height-15);
}

function oneWarrior(c){
	if(c == "Blue")
	{
		if(manaBlue >= .5)
		{
			fill(255,0,0,200);
			switch(directBlue)
			{
				case "UP":
					ellipse(xBlue, yBlue-50, sizeBlue);
					if(collideCircleCircle(xBlue,yBlue-50,sizeBlue,xRed,yRed,sizeRed)
					{
						hpRed-=.5;
					}
				break;
				case "LEFT":
					ellipse(xBlue-50, yBlue, sizeBlue);
					if(yRed<yBlue+sizeBlue && yRed>yBlue-sizeRed && xRed<xBlue-50+sizeBlue && xRed>xBlue-50-sizeRed)
					{
						hpRed-=.5;
					}
				break;
				case "RIGHT":
					ellipse(xBlue+50, yBlue, sizeBlue);
					if(yRed<yBlue+sizeBlue && yRed>yBlue-sizeRed && xRed<xBlue+50+sizeBlue && xRed>xBlue+50-sizeRed)
					{
						hpRed-=.5;
					}
				break;
				case "DOWN":
					rect(xBlue, yBlue+50, sizeBlue, sizeBlue);
					if(xRed<xBlue+sizeRed && xRed>xBlue-sizeRed && yRed<yBlue+50+sizeBlue && yRed>yBlue+50)
					{
						hpRed-=.5;
					}
				break;
			}
			manaBlue -= .5;
			turns--;
		}
	}
	else if(c == "Red")
	{
		if(manaRed >= .5)
		{
			manaRed -= .5;
			turns--;
		}
	}
}