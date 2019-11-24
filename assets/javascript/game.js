//hooks into win/loss & remaining guesses fields
var winChanger = document.getElementById("winCounter");
var lossChanger = document.getElementById("lossCounter");
var guessChanger = document.getElementById("remainingGuesses");
var guessDisplayer = document.getElementById("currentGuesses");

//tracks win/loss status & guesses left
var winCount = 0;
var lossCount = 0;
var guessesLeft = 9;





computerGuess();

//generates computer choice
function computerGuess(){
var characters = 'abcdefghijklmnopqrstuvwxyz';
var computerChoice = characters.charAt(Math.floor(Math.random() * characters.length));
console.log("the computer chose " + computerChoice);

//keypress function
document.addEventListener("keypress", function(event){
    
    //tracks user input
    var trackUser=String.fromCharCode(event.keyCode); 
    console.log("you pressed " + trackUser);

    //adds to winCount if true
    if(computerChoice === trackUser){
        winCount ++;
        winChanger.textContent = "Wins: " + winCount;

        guessesLeft = 9;
        guessChanger.textContent = "Guesses Left: " + guessesLeft;
        
        
        
        
    //adds to lossCount, reduces guessesLeft, and displays currentGuesses if false
    } else {
       
        guessesLeft --;
        guessChanger.textContent = "Guesses Left: " + guessesLeft;
        guessDisplayer.append(trackUser + ", ")

        if(guessesLeft==0){
            lossCount ++;
            lossChanger.textContent = "Losses: " + lossCount;
            guessesLeft = 9;
            guessChanger.textContent = "Guesses Left: " + guessesLeft;
        }
    }

   
});
}


