var gridSize = 25;
var speed = 7;
var max;
var player;
var point;
var Moved = false;
var Menu = "Main";
var Name = "";
var input;
var inputPlaced = false;

function setup(){
	createCanvas(700,700);
	input = createInput();
	InitGame();
}

function InitGame(){
	max = (width/gridSize)-2;
	player = new Player(1,1);
	player.CreateSnek();
	
	point = new Point(round(random(1,max)), round(random(1,max)));
}

function drawMenuMain(){
		background(51);
		line(0,0,width,0);
		line(0,0,0,height);
		line(width-1,0,width,height);
		line(0,height-1,width,height);
	
		textSize(120);
		fill(0,70,0);
		text("Snek", width/2-130, 170);
	
		fill(180,180,180);
		rect(width/2-160, 250, 320, 100);
		rect(width/2-160, 400, 320, 100);
		
		if(collidePointRect(mouseX, mouseY, width/2-160, 250, 320, 100))
		{
			fill(0,0,0,100);
			rect(width/2-160, 250, 320, 100);
			if(mouseClicked())
			{
				Menu = "Select";
			}
		}
		if(collidePointRect(mouseX, mouseY, width/2-160, 400, 320, 100))
		{
			fill(0,0,0,100);
			rect(width/2-160, 400, 320, 100);
			if(mouseClicked())
			{
				window.close();
			}
		}
		fill(0,0,0);
		textSize(50);
		text("Start Game", width/2-125, 320);
		text("Exit", width/2-40, 470);
}

function showScoreBoard(){
	Menu = "Score";
	
	background(51);
}

function drawMenuSelect(){
	background(51);
	////////////////////////////////////////////////////////
	//													  //
	//				Difficulty Selection Menu			  //
	//													  //
	////////////////////////////////////////////////////////
	
	//Left Button
	fill(100,100,100);
	rect(50,50,50,50);
	
	//Difficulty Selection
	fill(150,150,150);
	rect(100,50,500,50);
	
	//Right Button
	fill(100,100,100);
	rect(600,50,50,50);
	
	//Middle Line
	line(100,75, 600,75);
	
	//Left Arrow
	line(50,75,100,50);
	line(50,75,100,100);
	
	//Right Arrow
	line(600,50,650,75);
	line(600,100,650,75);
	
	//Indents
	line(200,63,200,87);
	line(300,63,300,87);
	line(400,63,400,87);
	line(500,63,500,87);
	
	//Text
	textSize(20);
	fill(150,150,150);
	text("Difficulty : ", 280, 120);
	var tempBub = 200;
	switch(speed)
	{
		case 1:
			fill(255,0,0);
			text("EXTREME NIGGA!!", 375, 120);
			tmpBub = 200;
		break;
		case 3:
			fill(255,140,0);
			text("Hard", 375, 120);
			tmpBub = 300;
		break;
		case 5:
			fill(255,215,0);
			text("Medium", 375, 120);
			tmpBub = 400;
		break;
		case 7:
			fill(100,255,0);
			text("Easy", 375, 120);
			tmpBub = 500;
		break;
	}
	fill(0,100,0);
	ellipse(tmpBub, 75, 15);
	////////////////////////////////////////////////////////
	//													  //
	//				Difficulty Events					  //
	//													  //
	////////////////////////////////////////////////////////
	if(collidePointRect(mouseX, mouseY, 50,50,50,50)){
		fill(0,0,0,100);
		rect(50,50,50,50);
		if(speed!=1 && mouseClicked())
		{
			speed-=2;
		}
	}
	if(collidePointRect(mouseX, mouseY, 600,50,50,50)){
		fill(0,0,0,100);
		rect(600,50,50,50);
		if(speed!=7 && mouseClicked())
		{
			speed+=2;
		}
	}
	////////////////////////////////////////////////////////
	//													  //
	//				Color Wheel							  //
	//													  //
	////////////////////////////////////////////////////////
	
	//Left Button
	fill(100,100,100);
	rect(50,150,50,50);
	
	//Wheel
	fill(150,150,150);
	rect(100,150,500,50);
	
	//Right Button
	fill(100,100,100);
	rect(600,150,50,50);
	
	//Left Arrow
	line(50,175,100,150);
	line(50,175,100,200);
	
	//Right Arrow
	line(600,150,650,175);
	line(600,200,650,175);
	
	//Colors
	//Red
	fill(255,0,0, 150);
	rect(100,150,50,50);
	//Green
	fill(0,255,0, 150);
	rect(150,150,50,50);
	//Blue
	fill(0,0,255, 150);
	rect(200,150,50,50);
	//Orange
	fill(255,100,0, 150);
	rect(250,150,50,50);
	//Cyan
	fill(0,150,150, 150);
	rect(300,150,50,50);
	//Black
	fill(0,0,0, 150);
	rect(350,150,50,50);
	//White
	fill(255,255,255, 150);
	rect(400,150,50,50);
	//Pink
	fill(255,51,255, 150);
	rect(450,150,50,50);
	//Yellow
	fill(255,255,0, 150);
	rect(500,150,50,50);
	//Purple
	fill(75,0,130, 150);
	rect(550,150,50,50);
	
	//Text
	textSize(20);
	var tempclr = "";
	fill(0,0,0);
	switch(player.ColorAtt)
	{
		case "Red":
		tmpclr = "Red";
		triangle(100,150,150,150,125,165);
		break;
		case "Green":
		tmpclr = "Green";
		triangle(150,150,200,150,175,165);
		break;
		case "Blue":
		tmpclr = "Blue";
		triangle(200,150,250,150,225,165);
		break;
		case "Orange":
		tmpclr = "Orange";
		triangle(250,150,300,150,275,165);
		break;
		case "Cyan":
		tmpclr = "Cyan";
		triangle(300,150,350,150,325,165);
		break;
		case "Black":
		tmpclr = "Black";
		triangle(350,150,400,150,375,165);
		break;
		case "White":
		tmpclr = "White";
		triangle(400,150,450,150,425,165);
		break;
		case "Pink":
		tmpclr = "Pink";
		triangle(450,150,500,150,475,165);
		break;
		case "Yellow":
		tmpclr = "Yellow";
		triangle(500,150,550,150,525,165);
		break;
		case "Purple":
		tmpclr = "Purple";
		triangle(550,150,600,150,575,165);
		break;
	}
	fill(150,150,150);
	text("Color : " + tmpclr, 280, 220);
	////////////////////////////////////////////////////////
	//													  //
	//				Color Events						  //
	//													  //
	////////////////////////////////////////////////////////
	if(collidePointRect(mouseX,mouseY,50,150,50,50))
	{
		fill(0,0,0,100);
		rect(50,150,50,50);
		if(mouseClicked())
		{
			switch(player.ColorAtt)
			{
				case "Green":
				player.Color = color(255,0,0,150);
				player.ColorAtt = "Red";
				break;
				case "Blue":
				player.Color = color(0,255,0,150);
				player.ColorAtt = "Green";
				break;
				case "Orange":
				player.Color = color(0,0,255,150);
				player.ColorAtt = "Blue";
				break;
				case "Cyan":
				player.Color = color(255,100,0,150);
				player.ColorAtt = "Orange";
				break;
				case "Black":
				player.Color = color(0,150,150,150);
				player.ColorAtt = "Cyan";
				break;
				case "White":
				player.Color = color(0,0,0,150);
				player.ColorAtt = "Black";
				break;
				case "Pink":
				player.Color = color(255,255,255,150);
				player.ColorAtt = "White";
				break;
				case "Yellow":
				player.Color = color(255,51,255,150);
				player.ColorAtt = "Pink";
				break;
				case "Purple":
				player.Color = color(255,255,0,150);
				player.ColorAtt = "Yellow";
				break;
			}
		}
	}
	if(collidePointRect(mouseX,mouseY,600,150,50,50))
	{
		fill(0,0,0,100);
		rect(600,150,50,50);
		if(mouseClicked())
		{
			switch(player.ColorAtt)
			{
				case "Red":
				player.Color = color(0,255,0,150);
				player.ColorAtt = "Green";
				break;
				case "Green":
				player.Color = color(0,0,255,150);
				player.ColorAtt = "Blue";
				break;
				case "Blue":
				player.Color = color(255,100,0,150);
				player.ColorAtt = "Orange";
				break;
				case "Orange":
				player.Color = color(0,150,150,150);
				player.ColorAtt = "Cyan";
				break;
				case "Cyan":
				player.Color = color(0,0,0,150);
				player.ColorAtt = "Black";
				break;
				case "Black":
				player.Color = color(255,255,255,150);
				player.ColorAtt = "White";
				break;
				case "White":
				player.Color = color(255,51,255,150);
				player.ColorAtt = "Pink";
				break;
				case "Pink":
				player.Color = color(255,255,0,150);
				player.ColorAtt = "Yellow";
				break;
				case "Yellow":
				player.Color = color(75,0,130,150);
				player.ColorAtt = "Purple";
				break;
			}
		}
	}
	////////////////////////////////////////////////////////
	//													  //
	//				Skin Wheel							  //
	//													  //
	////////////////////////////////////////////////////////
	
	//Left Button
	fill(100,100,100);
	rect(50,250,50,50);
	
	//Wheel
	fill(150,150,150);
	rect(100,250,500,50);
	
	//Right Button
	fill(100,100,100);
	rect(600,250,50,50);
	
	//Left Arrow
	line(50,275,100,250);
	line(50,275,100,300);
	
	//Right Arrow
	line(600,250,650,275);
	line(600,300,650,275);
	
	//Indents
	line(265, 250, 265, 300);
	line(432, 250, 432, 300);
	
	//Skins
	fill(player.Color);
	rect(183-gridSize/2,275-gridSize/2,gridSize,gridSize);
	ellipse(349, 275, gridSize);
	triangle(515,275-gridSize/2,515-gridSize/2,275+gridSize/2,515+gridSize/2,275+gridSize/2);
	
	////////////////////////////////////////////////////////
	//													  //
	//				Skin Events							  //
	//													  //
	////////////////////////////////////////////////////////
	
	if(collidePointRect(mouseX,mouseY, 50,250,50,50))
	{
		fill(0,0,0,100);
		rect(50,250,50,50);
		if(mouseClicked())
		{
			switch(player.Type)
			{
				case "Circle":
				player.Type = "Square";
				break;
				case "Triangle":
				player.Type = "Circle";
				break;
			}
		}
	}
	if(collidePointRect(mouseX,mouseY,600,250,50,50))
	{
		fill(0,0,0,100);
		rect(600,250,50,50);
		if(mouseClicked())
		{
			switch(player.Type)
			{
				case "Square":
				player.Type = "Circle";
				break;
				case "Circle":
				player.Type = "Triangle";
				break;
			}
		}
	}
	fill(0,0,0);
	switch(player.Type)
	{
		case "Square":
		triangle(100,250, 265, 250, 183, 260);
		break;
		case "Circle":
		triangle(265,250,432,250,349,260);
		break;
		case "Triangle":
		triangle(432,250,600,250,515,260);
		break;
	}
	fill(150,150,150);
	text("Skin Selection", 280,320);
	
	////////////////////////////////////////////////////////
	//													  //
	//				Name								  //
	//													  //
	////////////////////////////////////////////////////////
	
	if(!inputPlaced)
	{
		input.position(width/2-input.width/2,420);
		input.value(Name);
		inputPlaced = true;
	}
	text("Enter your Name", width/2-input.width/2,400);
	Name = input.value();
	
	////////////////////////////////////////////////////////
	//													  //
	//				Score Screen						  //
	//													  //
	////////////////////////////////////////////////////////
	
	fill(100,100,100);
	rect(width/2-75, 500, 150, 75);
	fill(0,0,0);
	text("View",width/2-20, 535) ;
	text("Scoreboard", width/2-50,555);
	
	if(collidePointRect(mouseX, mouseY, width/2-75, 500, 150, 75))
	{
		fill(0,0,0,100);
		rect(width/2-75, 500,150,75);
		if(mouseClicked())
		{
			showScoreBoard();
		}
	}
	
	////////////////////////////////////////////////////////
	//													  //
	//				Start Button						  //
	//													  //
	////////////////////////////////////////////////////////
	fill(100,100,100);
	rect(width/2-100,height-75,200,50);
	fill(0,0,0);
	text("Start Game", width/2-55, height-40);
	if(collidePointRect(mouseX, mouseY, width/2-100,height-75,200,50))
	{
		fill(0,0,0,100);
		rect(width/2-100,height-75,200,50);
		if(mouseClicked() && Name != "")
		{
			inputPlaced = false;
			Menu = "";
		}
	}
}

function draw(){
	
	checkKey();
	
	if(Menu != "Select")
	{
		input.position(-50,-50);
	}
	
	if(Menu == "Main")
	{
		player.Score=0;
		drawMenuMain();
	}
	else if (Menu == "Select")
	{
		player.Score=0;
		drawMenuSelect();
	}
	else if (Menu == "Score")
	{
		showScoreBoard();
	}
	else if (Menu == "")
	{
		background(150,150,150);
	
		drawMap();
		
		if(!point.On)
		{
			point.addPoint();
		}
		else
		{
			point.showPoint();
		}
		
		if(!player.Pieces[0].dead && frameCount%speed == 0)
		{
			player.MoveSnek();
			player.AddLength();
		}
		else if(player.Pieces[0].dead)
		{
			fill(0,0,0,255);
			textSize(100);
			text("Get Fucked", width/2 - 260, height/2);
			text("Score : " + player.Score, width/2 - 180, height/2+100);
		}
		
		player.ShowSnek();
	}
}

function drawMap(){
	for(i=0;i<=width;i+=gridSize)
	{
		line(0,i,width,i);
		line(i,0,i,height);
	}
	
	for(i=0;i<=width;i+=gridSize)
	{
		for(j=0;j<=height;j+=gridSize)
		{
			if(i==0 || j==0 || i==width-gridSize || j==width-gridSize)
			{
				fill(40);
				rect(i,j,i+gridSize,j+gridSize);
			}
		}
	}
}

function checkKey(){
	if(!Moved || player.Pieces[0].dead || Menu == "Select")
	{
		switch(keyDown())
		{
			case "W":
			if(player.Pieces[0].direction == "Right" || player.Pieces[0].direction == "Left")
			{
				player.Pieces[0].direction = "Up";
				Moved = true;
			}
			break;
			case "A":
			if(player.Pieces[0].direction == "Up" || player.Pieces[0].direction == "Down")
			{
				player.Pieces[0].direction = "Left";
				Moved = true;
			}
			break;
			case "S":
			if(player.Pieces[0].direction == "Right" || player.Pieces[0].direction == "Left")
			{
				player.Pieces[0].direction = "Down";
				Moved = true;
			}
			break;
			case "D":
			if(player.Pieces[0].direction == "Up" || player.Pieces[0].direction == "Down")
			{
				player.Pieces[0].direction = "Right";
				Moved = true;
			}
			break;
			case "Space":
			if(player.Pieces[0].dead && Menu == "")
			{
				Menu = "Select";
				player.CreateSnek();
			}
			break;
			case "M":
			if(Menu == "Select")
			{
				Menu = "";
			}
		}
	}
}

function keyDown(){
	var temp = 0;
	if(keyCode == 119) //W
	{
		temp = "W";
	}else if(keyCode == 97) //A
	{
		temp = "A";
	}else if(keyCode == 115) //S
	{
		temp = "S";
	}else if(keyCode == 100) //D
	{
		temp = "D";
	}else if(keyCode == 37) //A
	{
		temp = "A";
	}else if(keyCode == 38) //W
	{
		temp = "W";
	}else if(keyCode == 39) //D
	{
		temp = "D";
	}else if(keyCode == 40) //S
	{
		temp = "S";
	}else if(keyCode == 32) //Space
	{
		temp = "Space";
	}else if(keyCode == 109) //M
	{
		temp = "M";
	}else
	{
		temp = 0;
	}
	keyCode=0;
	
	return temp;
}

function mouseClicked(){
	if(mouseButton == LEFT)
	{
		mouseButton="";
		return true;
	}
}