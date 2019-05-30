
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var computerChoice = alphabet[randomIndex];
var winCount = 1;
var lossCount = 0;
var guessesRemaining = 10;
var guessedLetters = [];
var randomIndex = Math.floor(Math.random() * alphabet.length);


document.onkeyup = function(event) {
    var userChoice = event.key;

    var regexp = /[a-z]/gi;
    if (!regexp.test(userChoice)) {
      alert("please enter a letter");
    }


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

