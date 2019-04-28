var randomWord;
var randomWordToken;
var trials = 0;

function initGame() {
    var word = document.getElementById("lblWord");
    
    setRandomWord();

    word.innerHTML = "WORD: " + randomWordToken;
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
    }
    else {
        trials++;
        var img = "img/hangman_" + trials + ".png";
        document.getElementById("imgHangman").src = img;
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

    alert(randomWord);
}