/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game{
    constructor() {
        this.missed=0;
        this.phrases=[
            new Phrase('phrase one'),
            new Phrase('phrase two'),
            new Phrase('phrase three'),
            new Phrase('phrase four'),
            new Phrase('phrase five')
        ];
        this.activePhrase = null;
    }
    startGame() {
        const overlay= document.querySelector('#overlay')
        overlay.style.display= 'none'
        this.activePhrase= this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();
    }
    getRandomPhrase() {
        const randomIndex= Math.floor(Math.random() * this.phrases.length);
        const phrase= this.phrases[randomIndex];
        return phrase;
    };
}