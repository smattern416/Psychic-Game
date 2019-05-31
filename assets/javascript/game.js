
var wins = 1;
var losses = 0;
var alphabet =
    ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var compChoice = alphabet[randomIndex];
var guessesRemaining = 10;
var guessedLetters = [];
var randomIndex = Math.floor(Math.random() * alphabet.length);

document.onkeyup = function(event) {
  var userChoice = event.key;
  var regexp = /[a-z]/gi;
    if (!regexp.test(userChoice)) {
    }
    else {
      console.log(userChoice);
    }
    if (guessesRemaining <= 0) {
      losses++;
      document.getElementById("losses").innerHTML = losses++;
      guessesRemaining = 10;
      guessedLetters = [];
      document.getElementById("guessedLetters").innerHTML = guessedLetters;
      document.getElementById("guessesRemaining").innerHTML = 10;
      randomIndex = Math.floor(Math.random() * alphabet.length);
      compChoice = alphabet[randomIndex];
    }
    // compares the randomly selected computer choice and user choice
    if (compChoice === userChoice) {
      document.getElementById("wins").innerHTML = wins++;
      guessedLetters = [];
      document.getElementById("guessedLetters").innerHTML = guessedLetters;
      randomIndex = Math.floor(Math.random() * alphabet.length);
      compChoice = alphabet[randomIndex];
      guessesRemaining = 10;
      document.getElementById("guessesRemaining").innerHTML = 10;
    } 
    else {
      document.getElementById("guessesRemaining").innerHTML = guessesRemaining--;
      guessedLetters.push(userChoice);
      document.getElementById("guessedLetters").innerHTML = guessedLetters;
    }
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

