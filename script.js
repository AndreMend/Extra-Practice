function bar () {
  var name = prompt("What is your name?");
  var number = prompt("Please enter a number between 1 - 10");
  var celeb = prompt("What is your favorite celebrity?");
  var location = prompt("What is your favorite location?");

  var result = "Congradulations " + name + " in " + number + " years you will meet " + celeb + " in " + location;

  var image = new Image();
  image.src = "Logo.png";
  image.width = "200";
  image.height = "150";

  document.getElementById("resultText").innerHTML = result;
  
  document.getElementById("resultImage").appendChild(image);
}

function display() {
  var text = "This is the text I want to display when the button is clicked";
  document.getElementById("displayText").innerHTML = text;
}

function signUp(){
  var username = prompt("Please Enter Your Name?");
  if (username == "") {
    document.getElementById ("information").innerHTML = "You have not signed up";
  }
  else {
    var signedUp = "Thank you" + username + " for signing up ";
    
    document.getElementById("information").innerHTML = signedUp;
  }
}

function ourAnimation(){
  var ourImage = document.getElementById("animations");

  ourImage.style.position = "relative";
  var position = 0;

  setInterval(move, 5);

  function move(){
    if(position == window.screen.width){
      clearInterval();   
    }
    else{
      position++;
      ourImage.style.left = position + "px";
    }
  }
}
