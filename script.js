var _ = require('lodash');

var array = [1,2,3,4,5,6,7,8];
console.log(_.without(array, 3));

var h3 = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("bdy");
var button = document.getElementById("btn");

function setGradient(){
	body.style.background = 
	"linear-gradient(to right, "
	 + color1.value 
	 + ", " 
	 + color2.value
	 + ")"; 

	 h3.textContent = body.style.background + ";";
}


function getRandomColors(){
	var letters = "012345678ABCDEF";
	var hex = "#";

	for(var i = 0; i < 6; i++){
		hex = hex + letters[Math.floor(Math.random() * 16)];
	}
	return hex;
}

function setRandomColors(){
	color1.value = getRandomColors();
	color2.value = getRandomColors();
	setGradient();
}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
button.addEventListener("click", setRandomColors);

