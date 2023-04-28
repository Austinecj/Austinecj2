var randomNumber1= Math.floor(Math.random()*6)+1;
var randomDiceImage= "dice" + randomNumber1+ ".png";
var randomImageSource = "imagedice/" + randomDiceImage;
var image1 = document.querySelectorAll("img")["0"];
image1.setAttribute("src", "imagedice/" +randomDiceImage);

var randomNumber2 = Math.floor(Math.random()*6)+1;
var randomDiceImage2 = "dice" + randomNumber2 + ".png";
var randomImageSource2 = "imagedice/" + randomDiceImage2;
var image2 = document.querySelectorAll("img")["1"];
image2.setAttribute("src", "imagedice/" + randomDiceImage2);
if(randomNumber1 > randomNumber2){
    document.querySelectorAll("h1")["0"].innerHTML="Player1 WINS!🏆"
}else if(randomNumber2> randomNumber1){
    document.querySelectorAll("h1")["0"].innerHTML="Player2 WINS!🏳‍🌈"
}else{
    document.querySelectorAll("h1")["0"].innerHTML="Draw!!!🌗"
}


