//1st Player
var randomNumber1 = Math.ceil(Math.random()*6);
var a = document.querySelector(".img1").setAttribute("src","./images/dice"+randomNumber1+".png");

//2nd Player
var randomNumber2 = Math.ceil(Math.random()*6);
var b = document.querySelector(".img2").setAttribute("src","./images/dice"+randomNumber2+".png");

//Setting up a winner
if(randomNumber1 > randomNumber2){
    var n = document.querySelector('h1').textContent = "Player 1 Winner!";
}else if(randomNumber1 > randomNumber2){
    var n = document.querySelector('h1').textContent = "Player 2 Winner!";
}else {
     var n = document.querySelector('h1').textContent = "Draw!";
}
