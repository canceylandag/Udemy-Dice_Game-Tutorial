/*Dice image Path list*/
var Dice = ["../images/dice1.png", "../images/dice2.png", "../images/dice3.png", "../images/dice4.png", "../images/dice5.png", "../images/dice6.png"]
var result;

/*random numbers*/
var randomnumber1 = Math.floor(Math.random() * 6) + 1;
var randomnumber2 = Math.floor(Math.random() * 6) + 1;
// document.querySelector("h1").textContent=randomnumber1;


/*Print the numbers*/
document.getElementsByClassName("dice1")[0].setAttribute("src", Dice[randomnumber1 - 1]);
document.getElementsByClassName("dice2")[0].setAttribute("src", Dice[randomnumber2 - 1]);

if (randomnumber1 > randomnumber2) {


  result = "🚩  Player1 Wins";

} else if (randomnumber2 > randomnumber1) {


  result = "Player2 Wins 🚩";

} else {

  result = "Draw";

}




document.querySelector("h1").textContent = result;
