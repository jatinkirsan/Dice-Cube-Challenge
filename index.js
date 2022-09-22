var randomno1 = Math.floor(Math.random() * 6) + 1;

var randomdiceimage= "images/dice"+ randomno1+".png";
var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomdiceimage);

var randomno2 = Math.floor(Math.random()*6)+1;
var randomdiceimagesource = "images/dice"+ randomno2+".png";
var image2 =document.querySelectorAll("img")[1];
 image2.setAttribute("src", randomdiceimagesource);

if(randomno1>randomno2)
{
  document.querySelector("h1").innerHTML = "Player 1 Wins!"
}
else if(randomno1<randomno2)
{
  document.querySelector("h1").innerHTML = "Player 2 Wins!"
}
else{
  document.querySelector("h1").innerHTML = "Draw !!"
}
