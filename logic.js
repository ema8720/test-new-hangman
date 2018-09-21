//  GLOBAL VARIABLE 
// -----------------------
var wordOptions = ["respect", "honesty", "sensibility"];
var selectedWord = "";
var lettersInWord = [];
var numBlanks = 0;
var blanksAndSuccesses = [];
var wrongLetters = [];
var lettersGuessed = "";
// Game Counter.
var winCount = 0;
var lossCount = 0;
var guessesLeft = 9;
// -----------------------
// Function (Reusable blocks of code that I will call upon when needed.)
// -----------------------
function startGame(){
    // Populate words in Array
    selectedWord = wordOptions[Math.floor(Math.random()* wordOptions.length)]
    // Split letters in word
    lettersInWord = selectedWord.split("");
    // create number of blanks
    numBlanks = lettersInWord.length;
    // Reset
    guessesLeft = 9;
    wrongLetters = [];
    blanksAndSuccesses = [];
    // Populate blanks and success with rigth number of blanks
    for (var i = 0; i< numBlanks; i++){
        blanksAndSuccesses.push("_");
    }
// Change HTML to reflect game round conditions
document.getElementById("wordToGuess").innerHTML = blanksAndSuccesses.join(" ");
document.getElementById("numGuesses").innerHTML = guessesLeft;
document.getElementById("winCounter").innerHTML = winCount;
document.getElementById("lossCounter").innerHTML = lossCount;

    // Testing Debugging
    console.log(selectedWord);
    console.log(lettersInWord);
    console.log(numBlanks);
    console.log(blanksAndSuccesses);
    console.log(guessesLeft);
}
// Function that check the letters 
function checkLetters(letter) {
    // Check if letter exist in code at all.
    var isLetterInWord = false;
    //  for loop
for (var i = 0; i<numBlanks; i++){
    if (selectedWord[i] == letter){
        isLetterInWord = true;
    }
}
// Check where in word letter exist, then populate out blankdAndSuccesses
if (isLetterInWord){
    for (var i = 0; i< numBlanks; i++){
        if (selectedWord[i] == letter){
            blanksAndSuccesses[i] = letter;
        }
    }
}
// Letter wasn't found
else {
    wrongLetters.push(letter);
    guessesLeft--
}
}

function roundConplete(){
  console.log("Win Count: " + winCount + " | Loss Count: "  + lossCount + " | Guesses Left " + numGuesses);
  // Update the HTML to reflect the most recent count stats.
  document.getElementById("numGuesses").innerHTML = guessesLeft;
  document.getElementById("wordToGuess").innerHTML = blanksAndSuccesses.join(" ");
  document.getElementById("wrongGuesses").innerHTML = wrongLetters.join(" ");
// Check if user won.
if (lettersInWord.toString() == blanksAndSuccesses.toString()) {
    winCount++;
    alert("You Won!");
    // Update the win counter in the HTML.
    document.getElementById("winCounter").innerHTML = winCount;
    startGame();
}
// Check if user lost.
    else if (guessesLeft == 0){
        lossCount++;
        alert("You lost!");
    // Update the HTML
    document.getElementById("lossCounter").innerHTML = lossCount;
    startGame();
    }
}
// -----------------------
// Main Process
// -----------------------
// Initiates the code the first time
startGame();
// Register keyclicks
document.onkeyup = function(event){
    var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
    checkLetters(letterGuessed);
    roundConplete();
    // Testing / Debugging
}

