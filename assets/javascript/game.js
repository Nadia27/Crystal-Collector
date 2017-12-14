//Generate random number at beginning of game and push to html
//Target number 19-120 and crystal randoms
var game = {
  crystalRandom1: 0,
  crystalRandom2: 0,
  crystalRandom3: 0,
  crystalRandom4: 0,
  computerRandom: 0,
  result: 0,

  generateNumbers: function() {
    this.computerRandom = Math.floor(Math.random() * (120 - 19) + 19);
    console.log(this.computerRandom);
    $("#comp-rand").text(this.computerRandom);
    this.crystalRandom1 = Math.floor(Math.random() * (13 - 1) + 1);
    this.crystalRandom2 = Math.floor(Math.random() * (13 - 1) + 1);
    this.crystalRandom3 = Math.floor(Math.random() * (13 - 1) + 1);
    this.crystalRandom4 = Math.floor(Math.random() * (13 - 1) + 1);
  }
}

var gameStat = {
  wins: 0,
  loses: 0
}



//Create an on-click event event that responds to button clicks on the crystal images
game.generateNumbers();

$("#pic1").on('click', function() {
  game.result = game.result + game.crystalRandom1;
  $("#score").text(game.result);
})
$("#pic2").on('click', function() {
  game.result = game.result + game.crystalRandom2;
  $("#score").text(game.result);
})
$("#pic3").on('click', function() {
  game.result = game.result + game.crystalRandom3;
  $("#score").text(game.result);
})
$("#pic4").on('click', function() {
  game.result = game.result + game.crystalRandom4;
  $("#score").text(game.result);
})

//Game over if player exceeds random number
$(".img-thumbnail").click(function() {
  if (game.result > game.computerRandom) {

    alert("Your score " + game.result + " exceeds the random number. You lose!");
    //Increase loses variable and print to HTML
    gameStat.loses++;
    console.log(gameStat.loses);
    $("#loses").text(gameStat.loses);
    resetGame();

  } else if (game.result === game.computerRandom) {
    alert("You win! You matched the random number " + game.computerRandom + ". Great job!");
    gameStat.wins++;
    $("#wins").text(gameStat.wins);
    resetGame();
  }

});


function resetGame(){
  game.crystalRandom1 = 0;
  game.crystalRandom2 = 0;
  game.crystalRandom3 = 0;
  game.crystalRandom4 = 0;
  game.computerRandom = 0;
  game.result = 0;
  $("#score").text(game.result);



	game.generateNumbers();
}