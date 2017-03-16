// Global variables
var userScore = 0;
var wins = 0;
var losses = 0;
var images = ["assets/images/crystal-1.jpg", "assets/images/crystal-2.jpg", 
			  "assets/images/crystal-3.jpg", "assets/images/crystal-4.jpg"];
var targetScore;

// Displays the target score to match on the page
$("#target-score").html("Score to Match: " + targetScore);
	
// Creates images to be shown on the page and then assigns each image a source from the images array,
// a value (random number between 1 and 12), and a place in the crystals div
for (i = 0; i < images.length; i++) {

	var imageCrystal = $("<img>");
	imageCrystal.addClass("image-crystal");
	imageCrystal.attr("src", images[i]);
	imageCrystal.attr("data-crystalvalue", Math.floor(Math.random() * (12 - 1 + 1)) + 1);
	$(".crystals").append(imageCrystal);
	console.log(images[i]);

}

function newGame() {

	// Determines target score (random number between 19 and 120) and displays it,
	// sets user score to 0 and displays it, assigns random value between 1 and 12 to each crystal
	targetScore = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
	$("#target-score").html("Score to Match: " + targetScore);
	userScore = 0;
	$("#user-score").html("Your Score: " + userScore);
	$(".image-crystal").each(function() {
		$(this).attr("data-crystalvalue", Math.floor(Math.random() * (12 - 1 + 1)) + 1);
	});

}

// Runs newGame function to start the first game
newGame();

// When a crystal image is clicked, the unique value for that crystal is added to the user score,
// which is then displayed on the page
$(".image-crystal").on("click", function() {
	var crystalValue = $(this).attr("data-crystalvalue");
	crystalValue = parseInt(crystalValue);
	console.log(crystalValue);
	userScore += crystalValue;
	$("#user-score").html("Your Score: " + userScore);

	// If the users score matches the target score, the user wins
	// A win alert is shown, win count increases by 1 and is shown on screen, and a new game starts
	if (userScore === targetScore) {
		wins++;
		$("#win-count").html("Wins: " + wins);
		alert("CONGRATULATIONS! You matched the score of " + targetScore + "! Press OK to play again.");
		newGame();
	}

	// If the user score goes over the target score, the user loses, the loss count increases by one,
	// a loss alert is shown, and a new game starts
	else if (userScore > targetScore) {
		losses++;
		$("#loss-count").html("Losses: " + losses);
		alert("Oh no! Your score is " + userScore + ". You went over the target score. Press OK to try again.");
		newGame();
	}

});