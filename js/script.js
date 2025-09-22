//alert("running external JS code")
// Event listeners
document.querySelector("#guessBtn").addEventListener("click", checkGuess);
document.querySelector("#resetBtn").addEventListener("click", initializeGame);


// Global var
let attempts = 0;
let randomNumber;
let winsCount = 0;
let lossesCount = 0;
initializeGame();
//document.querySelector("h1").style.color = "blue";

function initializeGame(){
    if (lossesCount > 0 || winsCount > 0){
        let wins = document.querySelector("#wins");
        wins.textContent = "Wins: " + winsCount;
        let losses = document.querySelector("#losses");
        losses.textContent = "Losses: " + lossesCount;
    }
    randomNumber = Math.floor(Math.random() * 99) + 1;
    console.log("Random number: " + randomNumber);
    attempts = 0;
    //hiding Reset button
    document.querySelector("#resetBtn").style.display = "none";

    //showing Guess button
    document.querySelector("#guessBtn").style.display = "inline";

    let playerGuess = document.querySelector("#playerGuess");
    playerGuess.focus();
    playerGuess.value = "";

    let feedback = document.querySelector("#feedback");
    feedback.textContent = "";

    document.querySelector("#guesses").textContent = "";

}

function checkGuess(){
    let feedback = document.querySelector("#feedback");
    feedback.textContent = "";
    let guess = document.querySelector("#playerGuess").value;

    console.log("Player guess: " + guess);
    if (guess < 1 || guess > 99){
        //alert("Guess is out of range!");
        feedback.textContent = "Enter a number between 1 and 99";
        feedback.style.color = "red";
        return;
    }
    attempts++;

    console.log("Attempts: " + attempts);
    feedback.style.color = "brown";
    if (guess == randomNumber){
        feedback.textContent = "You guessed it! Yay";
        feedback.style.color = "green";
        winsCount++;
        gameOver();
    } else {
        document.querySelector("#guesses").textContent += guess + " ";
        let triesLeft = 7 - attempts;
        if (attempts == 7){
            feedback.textContent = "You lost! The number was: " + randomNumber;
            feedback.style.color = "red";
            lossesCount++;
            gameOver();
        } else if ( guess > randomNumber){
            
            feedback.textContent = "Your guess was too high, you have " + triesLeft + " tries/try left";
        } else {
            feedback.textContent = "Your guess was too low, you have " + triesLeft + " tries/try left";
        }
    }

}

function gameOver(){
    let guessBtn = document.querySelector("#guessBtn");
    let resetBtn = document.querySelector("#resetBtn")
    resetBtn.style.display = "inline";
    guessBtn.style.display = "none";

}
