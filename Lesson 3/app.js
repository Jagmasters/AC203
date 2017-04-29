var c = document.getElementById("myCanvas1");
var ctx = c.getContext('2d');

ctx.beginPath();
ctx.strokeStyle="blue";
ctx.lineWidth ="2px";

//starting coordeinate
ctx.moveTo(75,0);

//other points 
ctx.lineTo(150,100);
ctx.lineTo(75,200);
ctx.lineTo(0,100);
ctx.closePath();
ctx.stroke();

//fill in
ctx.fillStyle="red";
ctx.fill();

var c2 = document.getElementById("myCanvas2");
var ctx2 = c2.getContext('2d');

ctx2.beginPath();
ctx2.strokeStyle="red";
ctx2.lineWidth ="2px";

//starting coordinate
ctx2.moveTo(0,0);

//other points 
ctx2.lineTo(300,300);
ctx2.lineTo(300,0);
ctx2.lineTo(0,300);
ctx2.closePath();
ctx2.stroke();

//fill in
ctx2.fillStyle="blue";
ctx2.fill();


var c3 = document.getElementById("myCanvas3");
var ctx3 = c3.getContext('2d');

ctx3.beginPath();
ctx3.arc(100,100,50,0,6.28);
ctx3.closePath();
ctx3.stroke();
ctx3.fillStyle = "green";
ctx3.fill();


var c5 = document.getElementById("myCanvas5");
var ctx5 = c5.getContext('2d');

ctx5.beginPath();
ctx5.lineWidth ="2px";
ctx5.fillStyle ="green";
ctx5.fillrect(0.300,800.150);
ctx5.fillStyle = "cyan";
ctx5.fillRect(0,0,800,350);

var Abaddon = new Image();
Abaddon.src = "Abaddon.png";

Abaddon.onload = function (){
	ctx5.drawImage(Abaddon,150,300,70,100);
}

var c5 = document.getElementById('myCanvas5');
var ctx5 = c5.getContext('2d');



