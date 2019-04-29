var randomWord;
var randomWordToken;
var trials = 0;

function initGame() {
    setRandomWord();
}

function validateUserInput() {
    var userInput = document.getElementById("txtUserInput");
    var temp = "";
    if(randomWord.includes(userInput.value) && !randomWordToken.includes(userInput.value)) {
        for(var i = 0; i < randomWord.length; i++) {
            if(randomWord.charAt(i) == userInput.value) {
                temp += userInput.value;
            }
            else if(randomWordToken[i] == "_") {
                temp += "_";
            }
            else {
                temp += randomWordToken[i];
            }
        }
        randomWordToken = temp;
        document.getElementById("lblWord").innerHTML = "WORD: " + randomWordToken;
        if(randomWordToken == randomWord) {
            setGameOverScreen("You correctly guessed the word: " + randomWord);
        }
    }
    else {
        if(!userInput.value == "") {
            trials++;
            var img = "img/hangman_" + trials + ".png";
            document.getElementById("imgHangman").src = img;
            if(trials == 9) {
                setGameOverScreen("GAME OVER<br/>The correct word was: " + randomWord);
            }
        }
    }
    userInput.value = "";
}

function setRandomWord() {
    var words = ["Apple", "Banana", "Phylantrophist", "Psychologist"];
    var randomWordIndex = Math.floor(Math.random() * (+(words.length - 1) - +0)) + +0;

    randomWord = words[randomWordIndex];
    randomWordToken = "";

    for(var i = 0; i < randomWord.length; i++) {
        randomWordToken += "_";
    }

    document.getElementById("lblWord").innerHTML = "WORD: " + randomWordToken;
}

function setGameOverScreen(gameOverMessage) {
    manipulateGameArea("hidden", "visible", gameOverMessage);
}

function setGameScreen() {
    manipulateGameArea("visible", "hidden", "");
    trials = 0;
    document.getElementById("imgHangman").src = "";
    setRandomWord();
}

function manipulateGameArea(settingOne, settingTwo, gameOverMessage) {
    document.getElementById("txtUserInput").style.visibility = settingOne;
    document.getElementById("btnEnter").style.visibility = settingOne;
    document.getElementById("lblWord").style.visibility = settingOne;

    document.getElementById("hGameOver").style.visibility = settingTwo;
    document.getElementById("hGameOver").innerHTML = gameOverMessage;
    document.getElementById("btnRestart").style.visibility = settingTwo;
}