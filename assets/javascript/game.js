var userScore = 0;
var wins = 0;
var losses = 0;
var targetScore = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
var crystalScore1
var crystalScore2
var crystalScore3
var crystalScore4

function newGame() {

	// Returns random number between 19 and 120
	targetScore = Math.floor(Math.random() * (120 - 19 + 1)) + 19;

	console.log(targetScore);

	userScore = 0;

	// Displays the score to match on the page
	$("#target-score").html("Score to Match: " + targetScore);

	// Picks a random number between 1 and 12 as the value for each crystal
	crystalScore1 = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
	crystalScore2 = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
	crystalScore3 = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
	crystalScore4 = Math.floor(Math.random() * (12 - 1 + 1)) + 1;

	console.log(crystalScore1);
	console.log(crystalScore2);
	console.log(crystalScore3);
	console.log(crystalScore4);

}

newGame();

// When the user clicks a specific crystal, their score increases by the appropriate amount
$("#crystal-image-1").on("click", function() {
	userScore += crystalScore1;
	$("#user-score").html("User Score: " + userScore);
});

$("#crystal-image-2").on("click", function() {
	userScore += crystalScore2;
	$("#user-score").html("User Score: " + userScore);
});

$("#crystal-image-3").on("click", function() {
	userScore += crystalScore3;
	$("#user-score").html("User Score: " + userScore);
});

$("#crystal-image-4").on("click", function() {
	userScore += crystalScore4;
	$("#user-score").html("User Score: " + userScore);
});

console.log(userScore);
console.log(targetScore);

// If the users score matches the target score, they win.
// A win alert is shown, wins increases by 1 and is shown on screen, and a new game starts
if (userScore === targetScore) {
	wins++;
	$("#win-count").html("Wins: " + wins);
	alert("Congratulations! You matched the score! Press OK to play again.");
	newGame();
}

if (userScore > targetScore) {
	losses++;
	$("#loss-count").html("Losses: " + losses);
	alert("You did not match the score. Press OK to try again.");
}