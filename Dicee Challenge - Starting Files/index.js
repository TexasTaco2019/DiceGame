
//find random numbers
var randomNumber1 = Math.floor(Math.random() * 6 + 1);
var randomNumber2 = Math.floor(Math.random() * 6 + 1);

//assign the image by the random randomNumber1
var randomDiceImage1 = "dice" + randomNumber1 + ".png";
var randomDiceImage2 = "dice" + randomNumber2 + ".png";

//continues putting the string together for image source
var randomImageSource1 = "images/" + randomDiceImage1;
var randomImageSource2 = "images/" + randomDiceImage2;

//places the image into the screen
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource1);

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);//combines two steps from the first dice

//below cecks to se which player wins or if there is a tie
if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🙌🏻Player ONE wins!";//looks for <h1> and writes to it
}
else if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").innerHTML = "👍🏻Player TWO wins!";//same
}
else  {
  document.querySelector("h1").innerHTML = "🤜🏻🤛🏻ONE and TWO DRAW!";//same
}
