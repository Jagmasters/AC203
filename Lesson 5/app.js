console.log("test");

var canvas;
var ctx;

//player position
var x = 300;
var y = 300;
var size =30;

//player speed
var mx = 0
var my = 0;

//Postition of ghost
var ghostX;
var ghostY;
var ghostWidth
var ghostheight

//boolean to keep track of wether collision is occuring
var ghostCollision = false;
var circleCollision = false;
//canvas width and height

var WIDTH = 600;
var HEIGHT = 600;
var gameover =false;
var score = 0;

var circleX;
var circleY;

//import Luke
function drawLuke(x,y,s){
	ctx = document.getElementById("myCanvas").getContext('2d');
	//ctx.fillRect(x,y,size,size)
	var Luke = new Image();
	Luke.src = "Luke.png"
	ctx.drawImage(Luke,x,y,s,s)
}
function drawGhost(){
	ctx = document.getElementById('myCanvas').getContext('2d');
	var ghost = new Image();
	ghost.src = "Darth Vader.png"
	ctx.drawImage(ghost,ghostX,ghostY,50,50);
}

//import circle
function drawCircle(){
	ctx = document.getElementById("myCanvas").getContext('2d');
	var circle = new Image();
	circle.src = "Holocron.png"
	ctx.drawImage(circle,circleX,circleY,40,40);
}


//initialize our animation
function init (){
	//set up canvas
	canvas = document.getElementById("myCanvas");
	ctx = canvas.getContext("2d");
	//putting ghost in random position
	ghostX = Math.floor(Math.random() * 550);
	ghostY = Math.floor(Math.random() * 550);
	//put circle in random position
	circleX = Math.floor(Math.random()*WIDTH-40)
	circleY = Math.floor(Math.random()*HEIGHT-40)
	//wait for keyboard press
	window.onkeydown = keydownControl;

	//redraw our canvas
	return setInterval(draw,10);
}

function keydownControl(e){
	if(e.keyCode == 37){
		mx = -4;
		my = 0;
	} else if (e.keyCode == 38){
		mx = 0;
		my = -4;
	} else if (e.keyCode == 39){
		mx = 4;
		my = 0;
	} else if (e.keyCode == 40){
		mx = 0;
		my = 4;
	}
	
}

function clear(){
	ctx.clearRect(0,0,WIDTH,HEIGHT);

}

function draw(){
	clear();
	//while game is running
	if (gameover != true) {
		drawLuke(x,y,size);
		drawGhost();
		drawCircle();
		//bounce off the walls
		if (x+mx>WIDTH-size || x+mx <0) {
			mx = -mx;
		} else if (y+my> HEIGHT -size || y+my <0){
			my = -my;
		}

		//move player
		x += mx;
		y += my;
		//ghost follow pacman
		followPacman();
		//Is there a collision
		collisionCheck();
		collisionHandle();
	}
	//If game is over
	if (gameover == true){
		ctx.font = "40px Impact";
		ctx.fillText("GAME OVER",200,300)
	}
}
function collisionHandle(){
	//If there is a collision, resets position of fruit and changes the score
	if(ghostCollision == true){
		gameover = true;
	}
	if(circleCollision == true) {
			circleX = Math.floor(Math.random() * 550);
			circleY = Math.floor(Math.random() * 550);
			score += 1
			document.getElementById("score").innerHTML = score;
	}
}
function collisionCheck(){
	//accounting for collision from the top left and the bottom right
	if((x >= ghostX) && (x <= ghostX + 50 ) &&(y >= ghostY) &&(y <= ghostY + 50)){
		ghostCollision = true;
	} else {
		ghostCollision = false;
	}
	//checking for collision with circle
	if((x >= circleX) && (x <= circleX + 50 ) &&(y >= circleY) &&(y <= circleY + 50)){
		circleCollision = true;
	} else {
		circleCollision = false;
	}
}

//ghost follows pacman
function followPacman(){
	if(ghostX<x){
		ghostX += 1 
	}
	if (ghostY<y){
		ghostY += 1
	}
	if (ghostX>x){
		ghostX -= 1
	}
	if (ghostY>y){
		ghostY -= 1
	}
}


init();


