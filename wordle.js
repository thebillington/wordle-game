const words = require('./words.json');

Array.prototype.random = function(){
    return this[Math.floor(Math.random()*this.length)];
}

String.prototype.replaceAt = function(index, replacement) {
    return this.substr(0, index) + replacement + this.substr(index + replacement.length);
}

module.exports = class WordleGame {
    #word;

    constructor() {
        this.#word = words.random();
        this.attempts = 6;
    }

    guess(word) {
        if (this.attempts == 0) {
            console.log("No more guesses, the word was: " + this.#word);
            return;
        }
        this.attempts--;
        if (word == this.#word) return { word:word, match:true, guessesRemaining:this.attempts };
        var data = { word:word, match:false, guessesRemaining:this.attempts, letters:[] };
        var copyOfWord = this.#word;
        for (var i = 0; i < 5 ; i++) {
            if (word[i] == copyOfWord[i]) {
                data.letters.push({ index:i, letter:word[i], result:"correct"});
                copyOfWord = copyOfWord.replaceAt(i, ".");
            } else if (copyOfWord.includes(word[i])) {
                data.letters.push({ index:i, letter:word[i], result:"present"});
                copyOfWord = copyOfWord.replaceAt(copyOfWord.indexOf(word[i]), ".");
            } else {
                data.letters.push({ index:i, letter:word[i], result:"absent"});
            }
        }
        return data;
    }
}