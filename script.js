function SearchBar() {
  var name = prompt("What is your name?");
  var number = prompt("Please enter a number between 1 - 10");
  var celeb = prompt("What is your favorite celebrity?");
  var location = prompt("What is your favorite location?");

  var result = "Congradulations " + name + " in " + number + " years you will meet " + celeb + " in " + place;

  var image = new Image();
  image.src = "______";
  image.width = "200";
  image.height = "150";

  document.getElementById("resultText").innerHTML = result;
  document.getElementById("resultText").appendChild(image);
}

function display() {
  var text = "This is the text I want to display when the button is clicked";
  document.getElementbyId("displayText").innerHTML = text;
}

function signUp() {
  var username = prompt("Please Enter Your Name?");
  if (username == "") {
    document.getElementById ("information").innerHTML = "You have not signed up";
  }
  else {
    var signedUp = "Thank you" + username + " for signing up ";
document.getElementById("information").innerHTMl = signedUp;
  }
}