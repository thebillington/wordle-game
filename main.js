const words = require('./words.json');
const WordleGame = require("./wordle.js");

var game = new WordleGame();
    
var correctLetters = [];
var presentLetters = [];
var absentLetters = [];

for (var count = 0; count < 6; count++) {
    var currentGuess = words.random();
    var result = game.guess(currentGuess);

    if (result.match) {
        break;
    } else {
        for (var i = 0; i < result.letters.length; i++) {
            if (result.letters[i].result == 'correct') {
                correctLetters.push(result.letters[i]);
            } else if (result.letters[i].result == 'present') {
                presentLetters.push(result.letters[i]);
            } else {
                absentLetters.push(result.letters[i]);
            }
        }
    }
}
console.log(correctLetters);
console.log(presentLetters);
console.log(absentLetters);