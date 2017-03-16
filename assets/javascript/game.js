// Global variables
var targetScore;
var userScore = 0;
var wins = 0;
var losses = 0;
var images = ["assets/images/crystal-1.jpg", "assets/images/crystal-2.jpg", 
			  "assets/images/crystal-3.jpg", "assets/images/crystal-4.jpg"];


// Creates images to be shown on the page and then assigns each image a source from the images array,
// a value (random number between 1 and 12), and displays the image in the crystals div
for (i = 0; i < images.length; i++) {

	var imageCrystal = $("<img>");
	imageCrystal.addClass("image-crystal");
	imageCrystal.attr("src", images[i]);
	imageCrystal.attr("data-crystalvalue", Math.floor(Math.random() * (12 - 1 + 1)) + 1);
	$(".crystals").append(imageCrystal);
	console.log(images[i]);

}

// Starting a new game: determines target score (random number between 19 and 120) and displays it,
// sets user score to 0 and displays it, assigns random value between 1 and 12 to each crystal
function newGame() {

	targetScore = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
	$("#target-score").html("Score to Match: " + targetScore);
	userScore = 0;
	$("#user-score").html("Your Score: " + userScore);
	$(".image-crystal").each(function() {
		$(this).attr("data-crystalvalue", Math.floor(Math.random() * (12 - 1 + 1)) + 1);
	});

}

// If the user wins the game: win count increases by one, win count is shown in the win count div,
// a win alert is displayed to the user and then a new game begins
function winGame() {

	wins++;
	$("#win-count").html("Wins: " + wins);
	alert("CONGRATULATIONS! You matched the score! Press OK to play again.");
	newGame();

}

// If the user loses the game: loss count increases by one, loss count is shown on the loss count div,
// a loss alert is dispayed to the user and then a new game begins
function loseGame() {

	losses++;
	$("#loss-count").html("Losses: " + losses);
	alert("Oh no! You went over the target score. Press OK to try again.");
	newGame();

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

	// If the user score matches the target score, the user wins and the winGame function is called
	if (userScore === targetScore) {
		setTimeout(winGame, 100);
	}

	// If the user score goes over the target score, the user loses and the loseGame function is called
	else if (userScore > targetScore) {
		setTimeout(loseGame, 100);
	}

});