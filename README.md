# WORDLE GUESSER

This repository holds three files to help you get started with the Wordle task:

## Files

### words.json

This is a **JSON** array containing a long list of 5 letter words. This dataset is used to choose a word by the `WordleGame` object and you will also be able to use this dataset to narrow down your guesses, given that the word the game object chooses must be in this list.

### wordle.js

This JavaScript file contains the `WordleGame` object which you will need to use to find out whether your guess is correct.

### main.js

This is an example implementation of a Wordle guesser. This script simply makes 6 random guesses and then checks what the actual word was. When you implement your own algorithm, you should aim to edit `main.js`.

## Using the code

### Importing the Game Object

You can import the game object using the `require` function in node. You will then need to instantiate the `WordleGame` class. An example of this can be found in `main.js`:

```
const WordleGame = require("./wordle.js");

var game = new WordleGame();
```

### Getting words from the json array

You can also import the json array from `words.json` using require:

```
const words = require('./words.json');
```

You can choose a specific word using array accesser notation:

```
console.log(words[0]);
```

You can also choose a random word:

```
console.log(words.random());
```

### Making a guess

You can make a guess by calling the `guess` function on the `WordleGame` object:

```
game.guess("ready");
```

When you guess, if you are correct you will receive the following output:

```
{ word: 'ready', match: true, guessesRemaining: 5 }
```

If you are incorrect, you will receive a dictionary of letters with a corresponding flag for each letter:

```
{
  word: 'dance',
  match: false,
  guessesRemaining: 5,
  letters: {
    d: 'present',
    a: 'present',
    n: 'absent',
    c: 'absent',
    e: 'present'
  }
}
```

These flags are:

* `absent` if the letter doesn't appear in the word
* `present` if the letter appears in the word but is in the wrong place
* `correct` if the letter appears in the word and is in the correct place

If you run out of attempts, you will see the correct word output:

```
No more guesses, the word was: grand
```
