var alphabet = "qwertyuiopasdfghjklzxcvbnm"
var wins = 0;
var losses = 0;
var attempts = 10;
var array = [];
var randomGuess = randomGuess;


randomGuess = alphabet[Math.floor(Math.random() * alphabet.length)];
console.log(randomGuess);

function compGuess() {
      randomGuess = alphabet[Math.floor(Math.random() * alphabet.length)];
      console.log(randomGuess);
}

document.onkeyup = function (event) {
      var playerGuess = event.key;

       if (playerGuess === randomGuess) {
            wins++;
            attempts = 10;
            array = [];
      }
 compGuess();
      if (playerGuess !== randomGuess) {
            attempts--;
      }
      if (attempts == 0) {
            losses++;
            array = []
            attempts = 10;
      }
     if (array.indexOf(playerGuess) >= 0) {

      } 
      else {
            array.push(playerGuess);
            document.getElementById('playerGuess').innerHTML = array;
            console.log(array);
      }

      document.getElementById('wins').innerHTML = wins;
      document.getElementById('losses').innerHTML = losses;
      document.getElementById('attempts').innerHTML = attempts;
}

// Computer prompts player
// User inputs a letter 
// Computer compares the users letter to their letter
// Decide winner 
// Allocate a point 
// Update remaining guesses
// Update how many guesses user has made so far 
// Loop that whole thing
// After however many guesses, game restarts 

