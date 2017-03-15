var xBlue=100;//20
var yBlue=300;//85
var hpBlue=10;
var manaBlue=10;
var sizeBlue=0;
var classBlue="";
var colorBlue="";
var directBlue="DOWN";

var xRed=100;//450
var yRed=200;//440
var hpRed=10;
var manaRed=10;
var sizeRed=0;
var classRed="";
var colorRed="";
var directRed="UP";

var turns = 10;
var WhosTurn = "Blue";

var Menu = "Start";

function setup(){
	createCanvas(500,600);
	colorMode(RGB);
	
	colorBlue=color(120,120,255);
	colorRed=color(255,100,100);
}

function drawMap(){
	background(80,80,80);
	
	fill(colorBlue);
	rect(xBlue, yBlue, sizeBlue, sizeBlue, 360);
	switch(directBlue)
	{
		case "UP":
		rect(xBlue+(sizeBlue/2), yBlue, 3, 3, 360);
		break;
		case "LEFT":
		rect(xBlue, yBlue+(sizeBlue/2), 3, 3, 360);
		break;
		case "RIGHT":
		rect(xBlue+sizeBlue-3, yBlue+(sizeBlue/2), 3, 3, 360);
		break;
		case "DOWN":
		rect(xBlue+(sizeBlue/2), yBlue+sizeBlue-3, 3, 3, 360);
		break;
	}
	fill(255,100,100);
	rect(xRed, yRed, sizeRed, sizeRed, 360);
	switch(directRed)
	{
		case "UP":
		rect(xRed+(sizeRed/2), yRed, 3, 3, 360);
		break;
		case "LEFT":
		rect(xRed, yRed+(sizeRed/2), 3, 3, 360);
		break;
		case "RIGHT":
		rect(xRed+sizeRed-3, yRed+(sizeRed/2), 3, 3, 360);
		break;
		case "DOWN":
		rect(xRed+(sizeRed/2), yRed+sizeRed-3, 3, 3, 360);
		break;
	}
}

function checkTurn(){
	if(turns <= 0)
	{
		textSize(50);
		WhosTurn == "Blue" ? fill(255,100,100) : fill(colorBlue);
		text(WhosTurn == "Blue" ? "Red's Turn" : "Blue's Turn", width/2 - 120, height/2);
		textSize(20);
		text("Press 'SPACE' to continue", width/2 - 115, height/2 + 20);
		if(keyReleased() == "SPACE")
		{
			WhosTurn == "Blue" ? WhosTurn="Red" : WhosTurn="Blue";
			turns = 10;
		}
	}
}

function playTurn(){
	if(WhosTurn == "Blue" && turns > 0)
	{
		switch(keyReleased())
		{
			case "W":
			if(!(yBlue <= 73))
			{
				yBlue-=5;
				turns--;
				directBlue="UP";
			}
			break;
			case "A":
			xBlue-=5;
			turns--;
			directBlue="LEFT";
			break;
			case "D":
			xBlue+=5;
			turns--;
			directBlue="RIGHT";
			break;
			case "S":
			if(!(yBlue >= 500-(sizeBlue+1)))
			{
				yBlue+=5;
				turns--;
				directBlue="DOWN";
			}
			break;
			case "1":
			switch(classBlue)
			{
				case "Warrior":
				oneWarrior("Blue");
				break;
				case "Elementalist":
				oneElementalist("Blue");
				break;
				case "Illusionist":
				oneIllusionist("Blue");
				break;
			}
			break;
			case "2":
			switch(classBlue)
			{
				case "Warrior":
				twoWarrior("Blue");
				break;
				case "Elementalist":
				twoElementalist("Blue");
				break;
				case "Illusionist":
				twoIllusionist("Blue");
				break;
			}
			break;
			case "3":
			switch(classBlue)
			{
				case "Warrior":
				threeWarrior("Blue");
				break;
				case "Elementalist":
				threeElementalist("Blue");
				break;
				case "Illusionist":
				threeIllusionist("Blue");
				break;
			}
			break;
			case "4":
			switch(classBlue)
			{
				case "Warrior":
				fourWarrior("Blue");
				break;
				case "Elementalist":
				fourElementalist("Blue");
				break;
				case "Illusionist":
				fourIllusionist("Blue");
				break;
			}
			break;
			default:
			break;
		}
	}
	else if(WhosTurn == "Red" && turns > 0)
	{		
		switch(keyReleased())
		{
			case "W":
			if(!(yRed <= 73))
			{
				yRed-=5;
				turns--;
				directRed="UP";
			}
			break;
			case "A":
			xRed-=5;
			turns--;
			directRed="LEFT";
			break;
			case "D":
			xRed+=5;
			turns--;
			directRed="RIGHT";
			break;
			case "S":
			if(!(yRed >= 500-(sizeRed+1)))
			{
				yRed+=5;
				turns--;
				directRed="DOWN";
			}
			
			break;
			default:
			break;
		}
	}
	
	sizeBlue = 30*(hpBlue/10) <= 10 ? 10 : 30*(hpBlue/10);
	sizeRed = 30*(hpRed/10) <= 10 ? 10 : 30*(hpRed/10);
}

function drawUI(){
	fill(150,150,150)
	rect(0,0, width, 60);
	
	///////////////////////////////////////
	//				Turn				 //
	///////////////////////////////////////
	fill(50,50,50);
	rect(width/2-9,8, 40,40, 20);
	
	var c = WhosTurn == "Blue" ? colorBlue : colorRed;
	fill(c);
	textSize(20);
	var center = turns >= 10 ? width/2 : width/2+6;
	text(turns, center, 36);
	///////////////////////////////////////
	//				Blue				 //
	///////////////////////////////////////
	fill(colorBlue);
	rect(0, 0, 110, 55, 0);
	
	fill(200,50,50);
	rect(5, 5, 100, 20);
	fill(100,100,200);
	rect(5, 30, 100, 20);
	
	fill(0,0,0,50);
	rect(5, 5, hpBlue*10, 20);
	fill(0,0,0,50);
	rect(5, 30, manaBlue*10, 20);
	
	fill(0,0,0);
	textSize(15);
	text("HP:" + hpBlue*10, 32, 21);
	
	fill(0,0,0);
	textSize(15);
	text("MP:" + manaBlue*10, 32, 46);
	
	///////////////////////////////////////
	//				Red					 //
	///////////////////////////////////////
	fill(255,100,100);
	rect(width-110, 0, 110, 55, 0);
	
	fill(200,50,50);
	rect(width-105, 5, 100, 20);
	fill(100,100,200);
	rect(width-105, 30, 100, 20);
	
	fill(0,0,0,50);
	rect(width-105, 5, hpRed*10, 20);
	fill(0,0,0,50);
	rect(width-105, 30, manaRed*10, 20);
	
	fill(0,0,0);
	textSize(15);
	text("HP:" + hpRed*10, width-75, 21);
	
	fill(0,0,0);
	textSize(15);
	text("MP:" + manaRed*10, width-75, 46);
	///////////////////////////////////////
	//				Spell				 //
	///////////////////////////////////////
	fill(150,150,150);
	rect(0,height-100, width, 100);
	
	if(WhosTurn == "Blue")
	{
		fill(0,0,255);
		text(classBlue, 7, height-80);
		switch(classBlue)
		{
			case "Warrior":
				drawWarrior();
			break;
			case "Elementalist":
				drawElementalist();
			break;
			case "Illusionist":
				drawIllusionist();
			break;
			default:
			break;
		}
	}
	else if(WhosTurn == "Red")
	{
		fill(255,0,0);
		text(classRed, 7, height-80);
		switch(classRed)
		{
			case "Warrior":
				drawWarrior();
			break;
			case "Elementalist":
				drawElementalist();
			break;
			case "Illusionist":
				drawIllusionist();
			break;
			default:
			break;
		}
	}
	
}

function drawMenuMain(){
	background(80,80,80);
	
	fill(230,230,230);
	rect(width/2-160, 250, 320, 100);
	rect(width/2-160, 400, 320, 100);
	fill(0,0,0);
	textSize(50);
	text("Start Game", width/2-125, 320);
	text("Exit", width/2-40, 470);
}

function drawMenuSelect(){
	background(80,80,80);
	
	line(0, height/2, width, height/2);
	
	fill(colorBlue);
	rect(0,0,130,50);
	fill(0,0,0);
	textSize(20);
	text("Blue's Class", 10, 30);
	
	fill(255,100,100);
	rect(0,height-50,130,50);
	fill(0,0,0);
	textSize(20);
	text("Red's Class", 10, height-17);
	
	btnLen = 110;
	btnPos = 65;
	fill(200,200,200);
	rect(btnPos,140,btnLen,60);
	rect(btnPos+btnLen+20,140,btnLen,60);
	rect(btnPos+(btnLen*2)+(20*2),140,btnLen,60);
	switch(classBlue)
	{
		case "":
			fill(200,200,200);
			rect(btnPos,140,btnLen,60);
			rect(btnPos+btnLen+20,140,btnLen,60);
			rect(btnPos+(btnLen*2)+(20*2),140,btnLen,60);
		break;
		case "Warrior":
			fill(colorBlue);
			rect(btnPos,140,btnLen,60);
		break;
		case "Elementalist":
			fill(colorBlue);
			rect(btnPos+btnLen+20,140,btnLen,60);
		break;
		case "Illusionist":
			fill(colorBlue);
			rect(btnPos+(btnLen*2)+(20*2),140,btnLen,60);
		break;
		default:
			fill(200,200,200);
			rect(btnPos,140,btnLen,60);
			rect(btnPos+btnLen+20,140,btnLen,60);
			rect(btnPos+(btnLen*2)+(20*2),140,btnLen,60);
		break;
	}
	fill(0,0,0);
	text("Warrior", btnPos+23, 177);
	textSize(18);
	text("Elementalist", btnPos+btnLen+26, 177);
	textSize(20);
	text("Illusionist", btnPos+(btnLen*2)+(20*2)+15, 177);
	
	
	btnLen = 110;
	btnPos = 65;
	fill(200,200,200);
	rect(btnPos,height/2+140,btnLen,60);
	rect(btnPos+btnLen+20,height/2+140,btnLen,60);
	rect(btnPos+(btnLen*2)+(20*2),height/2+140,btnLen,60);
	switch(classRed)
	{
		case "":
			fill(200,200,200);
			rect(btnPos,height/2+140,btnLen,60);
			rect(btnPos+btnLen+20,height/2+140,btnLen,60);
			rect(btnPos+(btnLen*2)+(20*2),height/2+140,btnLen,60);
		break;
		case "Warrior":
			fill(255,100,100);
			rect(btnPos,height/2+140,btnLen,60);
		break;
		case "Elementalist":
			fill(255,100,100);
			rect(btnPos+btnLen+20,height/2+140,btnLen,60);
		break;
		case "Illusionist":
			fill(255,100,100);
			rect(btnPos+(btnLen*2)+(20*2),height/2+140,btnLen,60);
		break;
		default:
			fill(200,200,200);
			rect(btnPos,height/2+140,btnLen,60);
			rect(btnPos+btnLen+20,height/2+140,btnLen,60);
			rect(btnPos+(btnLen*2)+(20*2),height/2+140,btnLen,60);
		break;
	}
	fill(0,0,0);
	text("Warrior", btnPos+23, 478);
	textSize(18);
	text("Elementalist", btnPos+btnLen+26, 478);
	textSize(20);
	text("Illusionist", btnPos+(btnLen*2)+(20*2)+15, 478);
	
	if(classRed != "" && classBlue != "")
	{
		fill(150,150,150);
		rect(width-150, height/2-30, 150, 60);
		fill(0,0,0);
		text("Start Game", width-120, height/2+8);
	}
}

function draw(){
	if(Menu == "Start")
	{
		drawMenuMain();
	}
	else if(Menu == "ClassSelect")
	{
		drawMenuSelect();
	}
	else
	{
		drawMap();
		
		drawUI();
		
		checkTurn();
		
		playTurn();
	}
}

function keyReleased(){
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
	}else if(keyCode == 32) //Space
	{
		temp = "SPACE";
	}else if(keyCode == 49) //1
	{
		temp = "1";
	}else if(keyCode == 50) //2
	{
		temp = "2";
	}else if(keyCode == 51) //3
	{
		temp = "3";
	}else if(keyCode == 52) //4
	{
		temp = "4";
	}else
	{
		temp = 0;
	}
	keyCode=0;
	
	return temp;
}

function mouseClicked(){
	if(Menu == "Start")
	{
		if(mouseX>=width/2-160 && mouseX<=width/2+160 && mouseY<=350 && mouseY>=250)
		{
			Menu = "ClassSelect";
			
		}
		else if(mouseX>=width/2-160 && mouseX<=width/2+160 && mouseY<=500 && mouseY>=400)
		{
			window.close();
		}
	}
	else if(Menu == "ClassSelect")
	{
		if(mouseX>=65 && mouseX<=175 && mouseY<=200 && mouseY>=140)
		{
			classBlue="Warrior";
		}
		else if(mouseX>=195 && mouseX<=305 && mouseY<=200 && mouseY>=140)
		{
			classBlue="Elementalist";
		}
		else if(mouseX>=325 && mouseX<=435 && mouseY<=200 && mouseY>=140)
		{
			classBlue="Illusionist";
		}
		else if(mouseX>=65 && mouseX<=175 && mouseY<=500 && mouseY>=440)
		{
			classRed="Warrior";
		}
		else if(mouseX>=195 && mouseX<=305 && mouseY<=500 && mouseY>=440)
		{
			classRed="Elementalist";
		}
		else if(mouseX>=325 && mouseX<=435 && mouseY<=500 && mouseY>=440)
		{
			classRed="Illusionist";
		}
		else if(mouseX>=width-150 && mouseX<=width && mouseY<=height/2+30 && mouseY>=height/2-30)
		{
			Menu = "";
		}
		
	}
}