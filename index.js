var randomNumber1 = Math.random();
var randomNumber1 = Math.floor((randomNumber1*6)+1);

var randomDiceImage = "dice" + randomNumber1 + ".png";

var randomImageSource = "images/" +randomDiceImage;

var image1 =  document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);

var randomNumber2 = Math.random();
var randomNumber2 = Math.floor((randomNumber2*6)+1);

var randomDiceImage = "dice" + randomNumber2 + ".png";

var randomImageSource = "images/" +randomDiceImage;

var image2 =  document.querySelectorAll("img")[1];

image2.setAttribute("src", randomImageSource);

if(randomNumber1>randomNumber2){
  document.querySelector("h1").innerHTML = "Player 1 Wins! 🚩";
}
else if(randomNumber1<randomNumber2){
  document.querySelector("h1").innerHTML = "🚩 Player 2 Wins! ";
}
else{
  document.querySelector("h1").innerHTML = " Draw! ";

}
