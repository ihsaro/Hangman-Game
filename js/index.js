var randomWord;

function initGame() {
    var word = document.getElementById("lblWord");
    
    setRandomWord();

    for(var i = 0; i < randomWord.length; i++) {
        word.innerHTML += "_ ";
    }

    alert(randomWord);

}

function validateUserInput() {

}

function setRandomWord() {
    var words = ["Apple", "Banana", "Phylantrophist", "Psychologist"];
    var randomWordIndex = Math.floor(Math.random() * (+(words.length - 1) - +0)) + +0;

    randomWord = words[randomWordIndex];
}