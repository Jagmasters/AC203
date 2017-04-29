var c= document.getElementById("myCanvas");
var ctx = c.getContext("2d");
//start point
ctx.moveTo(0,0);
//end point
ctx. lineTo(200,100);
//draw
ctx.stroke();
//color of rectangle
ctx.fillstyle="rgb(0,100,100)";
//rectangle
ctx.fillRect(200,200,80,80);
//border color
ctx.strokeStyle="rgb(255,0,0)";
//border
ctx.strokeRect(100,100,120,120);

ctx.clearRect(220,220,40,40);

var c1= document.getElementById("myCanvas1");
var ctx1=c1.getContext("2d");
ctx1.flllRect(0,0,150,150);
ctx1.flllRect(150,150,150,150);

