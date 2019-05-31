
var wins = 1;
var losses = 0;
var alphabet =
    ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var guessesRemaining = 10;
var guessedLetters = [];


// set up the computer to pick a random indexed value from aray
var randomIndex = Math.floor(Math.random() * alphabet.length);
var compChoice = alphabet[randomIndex];

console.log(compChoice);

// add a listener for the user to press a key
document.onkeyup = function(event) {
  var userChoice = event.key;
  // make sure the user selects a value a-z
  var regexp = /[a-z]/gi;
    if (!regexp.test(userChoice)) {
      alert("please enter a letter");
    }
    else {
      console.log(userChoice);
    }
    // reset computer choice if the user loses
    if (guessesRemaining <= 0) {
      losses++;
      document.getElementById("losses").innerHTML = losses++;
      console.log("You lost!");
      alert("You lost!");
      guessesRemaining = 10;
      guessedLetters = [];
      document.getElementById("guessedLetters").innerHTML = guessedLetters;
      document.getElementById("guessesRemaining").innerHTML = 10;
      randomIndex = Math.floor(Math.random() * alphabet.length);
      compChoice = alphabet[randomIndex];
      console.log(compChoice);
    }
    // compares the randomly selected computer choice and user choice
    if (compChoice === userChoice) {
      console.log("You won!");
      alert("You won!");
      document.getElementById("wins").innerHTML = wins++;
      guessedLetters = [];
      document.getElementById("guessedLetters").innerHTML = guessedLetters;
      randomIndex = Math.floor(Math.random() * alphabet.length);
      compChoice = alphabet[randomIndex];
      console.log(compChoice);
      guessesRemaining = 10;
      document.getElementById("guessesRemaining").innerHTML = 10;
    } else {
      console.log("Guess again!");
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
// Alert player of who won or lost 

