var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var randomGenBtn = document.querySelector(".randomGenBtn");

function setGradient(){
  body.style.background = "linear-gradient(to right, " + color1.value + "," + color2.value + ")";

  css.textContent = "Copy this:  " + body.style.background + ";";
}

function generateRandomColors(){
  color1.value = 
  '#'+ Math.floor(Math.random()*16777215).toString(16);
  color2.value = 
  '#'+ Math.floor(Math.random()*16777215).toString(16);
  setGradient();
}

//Setting the initial colors on the color inputs
color1.value = "#ff0000";
color2.value = "#ffff00";

//Displaying the initial color code
body.style.background = 
"linear-gradient(to right, " + 
color1.value + 
"," + 
color2.value + 
")";

css.textContent = "Copy this:  " + body.style.background + ";";


//Adding event listeners
color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
randomGenBtn.addEventListener("click", generateRandomColors);
