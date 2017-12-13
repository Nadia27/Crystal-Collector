var crystalRandom1 = "";
var crystalRandom2 = ""; 
var crystalRandom3 = "";
var crystalRandom4 = "";
var computerRandom = "";
var userScore = 0; 
var result = 0;
var wins = 0; 
var loses = 0; 



//Generate random number at beginning of game and push to html 
		//Target number 19-120 and crystal randoms 

		
	$(document).ready(function() {

		computerRandom = Math.floor(Math.random() * (120 - 19) + 19);
			  
			$("#comp-rand").append(computerRandom);
  	//Generate crystal random numbers (1-12) at start of game random number hidden until click event 
  		crystalRandom1 = Math.floor(Math.random() * (13 - 1) + 1 );
			console.log("I am your crystalRandom: " + crystalRandom1);

		crystalRandom2 = Math.floor(Math.random() * (13 - 1) + 1 );
			console.log("I am your crystalRandom: " + crystalRandom2);

		crystalRandom3 = Math.floor(Math.random() * (13 - 1) + 1 );
			console.log("I am your crystalRandom: " + crystalRandom3);

		crystalRandom4 = Math.floor(Math.random() * (13 - 1) + 1 );
			console.log("I am your crystalRandom: " + crystalRandom4);

	});


//Create an on-click event event that responds to button clicks on the crystal images
		
		$("#pic1").on('click', function() {
			var newCrystalRan1 = parseInt(crystalRandom1);
			//var newUserScore = parseInt(userScore);

		//Clicking image adds to score box
			result = result + newCrystalRan1;
			//Place Result in Score box(html)
			$("#score").text(result);
			
				console.log(result);
       })


		$("#pic2").on('click', function() {
			var newCrystalRan2 = parseInt(crystalRandom2);
			//var newUserScore = parseInt(userScore);

			console.log(newCrystalRan2);

			result = result + newCrystalRan2;
			$("#score").text(result);
			
				
       	})

		$("#pic3").on('click', function() {
			var newCrystalRan2 = parseInt(crystalRandom2);
			//var newUserScore = parseInt(userScore);

			console.log(newCrystalRan2);

			result = result + newCrystalRan2;
			$("#score").text(result);
			
				
        })

		$("#pic4").on('click', function() {
			var newCrystalRan2 = parseInt(crystalRandom2);
			//var newUserScore = parseInt(userScore);

			console.log(newCrystalRan2);

			result = result + newCrystalRan2;
			$("#score").text(result);
			
				
       	})
	
		
$(".img-thumbnail").click(function(){
  		if(result > computerRandom) {
  			alert("Your score " + result + " exceeds the random number! You lose."); 
  		} //else (result == computerRandom && !(0)) {
  			//alert("Great job! You win!")

  		//}
});	
	 
  

	
//Game over if player score matches random number 
//Game over if player exceeds random number 
//Game will restart if: player matches, exceeds, and a new random number should generate
//Generate new random number for crystals 
//Player score should reset to 0
//Show the number of games the player wins and loses
