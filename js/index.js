var randomWord;
var randomWordToken;
var trials = 0;

function initGame() {
    setRandomWord();
}

function validateUserInput() {
    var userInput = document.getElementById("txtUserInput");
    userInput = userInput.value.toUpperCase();
    var temp = "";
    if(randomWord.includes(userInput) && !randomWordToken.includes(userInput)) {
        for(var i = 0; i < randomWord.length; i++) {
            if(randomWord.charAt(i) == userInput) {
                temp += userInput;
            }
            else if(randomWordToken[i] == "_") {
                temp += "_";
            }
            else {
                temp += randomWordToken[i];
            }
        }
        randomWordToken = temp;

        var displayedWord = getDisplayedWord();

        document.getElementById("lblWord").innerHTML = "WORD: " + displayedWord;
        if(randomWordToken == randomWord) {
            setGameOverScreen("You correctly guessed the word: " + randomWord);
        }
    }
    else {
        if(!userInput == "") {
            trials++;
            var img = "img/hangman_" + trials + ".png";
            document.getElementById("imgHangman").src = img;
            if(trials == 9) {
                setGameOverScreen("GAME OVER<br/>The correct word was: " + randomWord);
            }
        }
    }
    document.getElementById("txtUserInput").value = "";
}

function setRandomWord() {
    var words = getWordArray();
    var wordsHint = getWordHintArray();
    var randomWordIndex = Math.floor(Math.random() * (+(words.length - 1) - +0)) + +0;

    randomWord = words[randomWordIndex].toUpperCase();
    var randomWordHint = wordsHint[randomWordIndex];
    randomWordToken = "";

    for(var i = 0; i < randomWord.length; i++) {
        randomWordToken += "_";
    }

    var displayedWord = getDisplayedWord();

    document.getElementById("lblWord").innerHTML = "WORD: " + displayedWord;
    document.getElementById("lblHint").innerHTML = "HINT: " + randomWordHint;
}

// METHOD THAT RETURNS ARRAY OF WORDS
function getWordArray() {
    return ["APPLE", "BANANA", "PHYLANTROPHIST", "PSYCHOLOGIST"];
}

// METHOD THAT RETURNS ASSOCIATED DEFINITION OF WORDS
function getWordHintArray() {
    return ["Red fruit", "Long yellow fruit", "Welfare promoter", "Someone who treats the mind"];
}

function getDisplayedWord() {
    var displayedWord = "";
    for(var i = 0; i < randomWordToken.length; i++) {
        displayedWord += randomWordToken[i];
        if(i != randomWordToken.length - 1) {
            displayedWord += " ";
        }
    }
    return displayedWord;
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
    document.getElementById("lblHint").style.visibility = settingOne;

    document.getElementById("hGameOver").style.visibility = settingTwo;
    document.getElementById("hGameOver").innerHTML = gameOverMessage;
    document.getElementById("btnRestart").style.visibility = settingTwo;
}