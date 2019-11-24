//these variables hook into html
var winChanger = document.getElementById("winCounter");
var lossChanger = document.getElementById("lossCounter");
var guessChanger = document.getElementById("remainingGuesses");
var guessDisplayer = document.getElementById("currentGuesses");

//these variables keep track of wins, losses, and guesses remaining
var winCount = 0;
var lossCount = 0;
var guessesLeft = 9;

//these variables are all the characters that can be picked by computer
var characters = 'abcdefghijklmnopqrstuvwxyz';

//this function starts on page load
computerGuess();

//this function causes computer to pick random number
function computerGuess(){
    computerChoice = characters.charAt(Math.floor(Math.random() * characters.length));
    
}

//whenever a key is pressed, it will be recorded
document.addEventListener("keypress", function(event){
    trackUser=String.fromCharCode(event.keyCode);
    

//if computer and user input match, win is achieved and guesses reset, computerGuess function starts again
    if(computerChoice==trackUser){
        winCount++;
        winChanger.textContent = "Wins: " + winCount;
        guessesLeft = 9;
        guessChanger.textContent = "Guesses Left: " + guessesLeft;
        guessDisplayer.textContent = "Your Guesses so far: ";
        computerGuess();
    }
    //if user guesses wrong, 1 guess remaining is removed and character picked is recorded
    else {
        guessesLeft --;
        guessChanger.textContent = "Guesses Left: " + guessesLeft;
        guessDisplayer.append(trackUser + ", ")
    //if user runs out of guesses, loss is added and guesses reset, computerGuess function starts again
        if(guessesLeft==0){
            lossCount ++;
            lossChanger.textContent = "Losses: " + lossCount;
            guessesLeft = 9;
            guessChanger.textContent = "Guesses Left: " + guessesLeft;
            guessDisplayer.textContent = "Your Guesses so far: ";
            computerGuess();
        }
    }
})



