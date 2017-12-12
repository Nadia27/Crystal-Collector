var crystalRandom = [];
var computerRandom = [];



//Generate random number at beginning of game and push to html 
		//Target number 19-120 and crystal randoms 

		
	$(document).ready(function() {

	computerRandom = Math.floor(Math.random() * (120 - 19) + 19);
			  
			$("#comp-rand").append(computerRandom);
  	
  	//crystalRandom = Math.floor(Math.random() * 13);
		//console.log("I am your: " + crystalRandom); 
	} ); 



//Create an on-click event event that responds to button clicks on the crystal images $('.letter-button').on('click', function() {
	
		
	
	//clicking the image generates a random numbers between 1-12..these numbers should be hidden 
	 
	//update player score with each click(in HTML) 
  

	
//Game over if player score matches random number 
//Game over if player exceeds random number 
//Game will restart if: player matches, exceeds, and a new random number should generate
//Generate new random number for crystals 
//Player score should reset to 0
//Show the number of games the player wins and loses
