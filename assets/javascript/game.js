
var won = 0;
var lost = 0;
var attempts = 10;
var usedArray = [];
var ranLetter = ranLetter;
var letters = "qwertyuiopasdfghjklzxcvbnm"

ranLetter = letters[Math.floor(Math.random() * letters.length)];
console.log(ranLetter);


function jsGuess() {
      ranLetter = letters[Math.floor(Math.random() * letters.length)];
      console.log(ranLetter);
}

document.onkeyup = function (event) {
      var playerGuess = event.key;

       if (playerGuess === ranLetter) {
            won++;
            attempts = 10;
            usedArray = [];
      }
 jsGuess();
      if (playerGuess !== ranLetter) {
            attempts--;
      }

      
      if (attempts == 0) {
            lost++;
            usedArray = []
            attempts = 10;
      }

      //HANDELING INCORRECT GUESSES - OUTPUT
      //this 'if' prevents a letter selected a 2nd time from being written to the usedArray again, although it still counts as a guess
      if (usedArray.indexOf(playerGuess) >= 0) {

      } else {
            //this pushes the players incorrect guess to the usedArray and writes it to the HTML
            usedArray.push(playerGuess);
            document.getElementById('playerGuess').innerHTML = usedArray;
            console.log(usedArray);

      }
      //OUTPUT TO HTML
      //these statements write the values/scores generated to the HTML
      document.getElementById('won').innerHTML = won;
      document.getElementById('lost').innerHTML = lost;
      document.getElementById('attempts').innerHTML = attempts;

}





// document.onkeyup = function(event) {
//   var userChoice = event.key;
//   var regexp = /[a-z]/gi;
//     if (!regexp.test(userChoice)) {
//     }
//     else {
//       console.log(userChoice);
//     }
//     if (guessesRemaining <= 0) {
//       losses++;
//       document.getElementById("losses").innerHTML = losses++;
//       guessesRemaining = 10;
//       guessedLetters = [];
//       document.getElementById("guessedLetters").innerHTML = guessedLetters;
//       document.getElementById("guessesRemaining").innerHTML = 10;
//       randomIndex = Math.floor(Math.random() * alphabet.length);
//       compChoice = alphabet[randomIndex];
//     }
//     // compares the randomly selected computer choice and user choice
//     if (compChoice === userChoice) {
//       document.getElementById("wins").innerHTML = wins++;
//       guessedLetters = [];
//       document.getElementById("guessedLetters").innerHTML = guessedLetters;
//       randomIndex = Math.floor(Math.random() * alphabet.length);
//       compChoice = alphabet[randomIndex];
//       guessesRemaining = 10;
//       document.getElementById("guessesRemaining").innerHTML = 10;
//     } 
//     else {
//       document.getElementById("guessesRemaining").innerHTML = guessesRemaining--;
//       guessedLetters.push(userChoice);
//       document.getElementById("guessedLetters").innerHTML = guessedLetters;
//     }
// }



// Computer prompts player
// User inputs a letter 
// Computer compares the users letter to their letter
// Decide winner 
// Allocate a point 
// Update remaining guesses
// Update how many guesses user has made so far 
// Loop that whole thing
// After however many guesses, game is over 

