var canvas;
var ctx;

//current position
var x = 300;
var y = 200;

//magnitude of movement
var mx = 2;
var my = 4;

//hold width and height of canvas
var width = 600;
var height = 400;

//initialize animation
function init (){
	canvas = document.getElementById("myCanvas");
	ctx = canvas.getContext("2d");
	return setInterval(draw,10)
}
//draw circle 
function circle(x,y,r){
	ctx.beginPath();
	ctx.arc(x,y,r,0,6.28)
	ctx.closePath();
	ctx.stroke();
	ctx.fillStyle = "red";
	ctx.fill();
}
//draw frames
function clear(){
	ctx.clearRect(0,0,width,height);
}
 function draw(){
 	clear();
 	circle(x,y,30);


 	if(x+mx <0 || x+mx>width){
 		mx = -mx;
 	}

	if(y+my <0 || y+my>height){
 		my = -my;
 	}
 	//move the shape
 	x += mx;
 	y += my;
 }
 init();