
var userGuess = document.getElementById("Guess a letter!");
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var compGuess = alphabet[Math.floor(Math.random() * alphabet.length)];
var wins = 0;
var losses = 0;
var ties = 0;
var guessesLeft = 10;
var directionsText = document.getElementById("directions-text");
    var userChoiceText = document.getElementById("userchoice-text");
    var computerChoiceText = document.getElementById("computerchoice-text");
    var winsText = document.getElementById("wins-text");
    var lossesText = document.getElementById("losses-text");
    var tiesText = document.getElementById("ties-text");

document.onkeyup = function(event) {
    console.log("This is working");
    var userGuess = event.key;
    console.log(userGuess);



}

console.log(compGuess);






// Computer prompts player
// User inputs a letter 
// Computer compares the users letter to their letter
// Decide winner 
// Allocate a point 
// Update remaining guesses
// Update how many guesses user has made so far 
// Loop that whole thing
// After however many guesses, game is over 
// Alert player of who won or lost 

 