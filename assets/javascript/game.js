var userScore = 0;
var wins = 0;
var losses = 0;
var targetScore = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
var images = ["/C:/Users/Patrick/Documents/Code/week-4-game/assets/images/crystal-1.jpg", "/C:/Users/Patrick/Documents/Code/week-4-game/assets/images/crystal-2.jpg", "/C:/Users/Patrick/Documents/Code/week-4-game/assets/images/crystal-3.jpg", "/C:/Users/Patrick/Documents/Code/week-4-game/assets/images/crystal-4.jpg"];

function newGame() {

	// Returns random number between 19 and 120
	targetScore = Math.floor(Math.random() * (120 - 19 + 1)) + 19;

	console.log(targetScore);

	userScore = 0;

	// Displays the target score to match on the page
	$("#target-score").html("Score to Match: " + targetScore);
	
	// Creates images to be shown on the page and then assigns each image a source from the images
	// array, a value (random number 1-12) for adding the user score, and a place on the page
	for (i = 0; i < images.length; i++) {

		var imageCrystal = $("<img>");
		imageCrystal.addClass("image-crystal");
		imageCrystal.attr("src", images[i]);
		imageCrystal.attr("data-crystalvalue", Math.floor(Math.random() * (12 - 1 + 1)) + 1);
		$(".crystals").append(imageCrystal);
		console.log(images[i]);
	
	}

}

newGame();

console.log(userScore);
console.log(targetScore);

// Creates an on-click event for each crystal image, the exclusive value for each image is added
// to the user score upon click 
$(".image-crystal").on("click", function() {
	var crystalValue = $(this).attr("data-crystalvalue");
	crystalValue = parseInt(crystalValue);
	console.log(crystalValue);
	userScore += crystalValue;
	$("#user-score").html("Your Score: " + userScore);
});


// If the users score matches the target score, they win.
// A win alert is shown, wins increases by 1 and is shown on screen, and a new game starts
if (userScore === targetScore) {
	wins++;
	$("#win-count").html("Wins: " + wins);
	alert("Congratulations! You matched the score! Press OK to play again.");
	newGame();
}

// If the user score goes over the target score, they lose, the loss count is increased by one,
// a loss alert is shown, and then a new game starts
else if (userScore > targetScore) {
	losses++;
	$("#loss-count").html("Losses: " + losses);
	alert("You did not match the score. Press OK to try again.");
}