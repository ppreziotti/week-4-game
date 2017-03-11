var userScore = 0;
var wins = 0;
var losses = 0;
// Returns random number between 19 and 120
var targetScore = Math.floor(Math.random() * (120 - 19 + 1)) + 19;

console.log(targetScore);

$("#target-score").html("Score to Match: " + targetScore);

var crystalScore1 = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
var crystalScore2 = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
var crystalScore3 = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
var crystalScore4 = Math.floor(Math.random() * (12 - 1 + 1)) + 1;

console.log(crystalScore1);
console.log(crystalScore2);
console.log(crystalScore3);
console.log(crystalScore4);

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