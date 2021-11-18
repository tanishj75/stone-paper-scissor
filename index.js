var choice = ["paper", "rock", "scissor"];
document.querySelectorAll("button")[0].addEventListener("click", function () {
  var random2 = Math.floor(Math.random() * 6);
  var random1 = Math.floor(Math.random() * 6);

  if (random1 > 2) random1 = random1 - 3;
  if (random2 > 2) random2 = random2 - 3;

  var img1 = document.querySelectorAll(".row img")[0];
  var img2 = document.querySelectorAll(".row img")[1];
  var player = choice[random1];
  var computer = choice[random2];
  var path1 = "images/" + player + ".png";
  var path2 = "images/" + computer + ".png";
  img1.setAttribute("src", path1);
  img2.setAttribute("src", path2);
  winner(player,computer);
});
function winner(player,computer) {
  if (player === computer) {
    document.querySelector("h1").innerHTML = "DRAW!!";
  } else if (player == "rock") {
    if (computer == "paper") {
      document.querySelector("h1").innerHTML = "COMPUTER WON";
    } else {
      document.querySelector("h1").innerHTML = "YOU WON 🥂";
    }
  } else if (player == "scissor") {
    if (computer == "rock") {
      document.querySelector("h1").innerHTML = "COMPUTER WON";
    } else {
      document.querySelector("h1").innerHTML = "YOU WON 🥂";
    }
  } else if (player == "paper") {
    if (computer == "scissor") {
      document.querySelector("h1").innerHTML = "COMPUTER WON";
    } else {
      document.querySelector("h1").innerHTML = "YOU WON 🥂";
    }
  }
}

