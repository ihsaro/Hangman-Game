var randomWord;
var randomWordToken;

function initGame() {
    var word = document.getElementById("lblWord");
    
    setRandomWord();

    word.innerHTML = "WORD: " + randomWordToken;
}

function validateUserInput() {
    var userInput = document.getElementById("txtUserInput");
    var temp = "";
    if(randomWord.includes(userInput.value)) {
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
        alert(temp);
        randomWordToken = temp;
        document.getElementById("lblWord").innerHTML = "WORD: " + randomWordToken;
    }
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